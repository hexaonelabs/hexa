import { Component, Inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ILoadingService, TokenInterface } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { AlertController, ModalController, PopoverController, ToastController } from "@ionic/angular";
import { TransactionReceipt } from "alchemy-sdk";
import { Transaction } from "ethers";
import { BehaviorSubject, combineLatest, firstValueFrom, map } from "rxjs";
import { SwapAssetsModalComponent } from "../../components/swap-assets-modal/swap-assets-modal.component";
import { WalletService } from "../../services/wallet.service";
import { ChainSelectorComponent } from "../../components/chain-selector/chain-selector.component";
import { register } from 'swiper/element/bundle';
import { SendAssetComponent } from "../../components/send-asset/send-asset.component";

register();

@Component({
  selector: "hexa-wallet-page",
  templateUrl: "./wallet-page.component.html",
  styleUrls: ["./wallet-page.component.scss"]
})
export class WalletPageComponent  {
  public selectedSegment: 'tokens'|'nfts'|'transactions'|'defi'|string = 'tokens';
  public readonly account$ = this._walletService.account$;
  public readonly wallets$ = this._walletService.wallets$;
  public readonly showTestnet$ = new BehaviorSubject(false);
  public readonly filterByChain$ = new BehaviorSubject<{id: number, name: string, logo?: string}|undefined>(undefined);
  public readonly tokensBalances$ = combineLatest([
    this._walletService.tokensBalances$,
    this.filterByChain$,
    this.showTestnet$
  ]).pipe(
    map(([ tokensBalances, chain, showTestnet]) => {
      console.log('tokensBalances', tokensBalances);
      let tokens = tokensBalances;
      // remove all testnet if showTestnet is false
      if (showTestnet === false) {
        tokens = tokens.filter(t => 'isTestnet' in t.chain ? !t.chain.isTestnet : true);
      }
      // remove all `variableDebit` tokens
      tokens = tokens.filter(t => t.symbol.includes('variableDebt') === false);
      // filter by chain
      if (!chain) {
        return tokens;
      }
      return tokens.filter(t => t.chain.id === chain.id);
    }
  ));
  public readonly isReceiveAssetsModalOpen$ = new BehaviorSubject(false);

  constructor(
    private readonly _alertCtrl: AlertController,
    private readonly _popoverCtrl: PopoverController,
    private readonly _modalCtrl: ModalController,
    private readonly _toastCtrl: ToastController,
    private readonly _walletService: WalletService,
    private readonly _route: ActivatedRoute,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) private readonly _loaderService: ILoadingService,
  ) {}

  async ionViewWillEnter() {
    const {s = 't'} = this._route.snapshot.queryParams;
    switch(true) {
      case s === 't': {
        this.selectedSegment = 'tokens';
        break;
      }
      case s === 'n': {
        this.selectedSegment = 'nfts';
        break;
      }
      case s === 'tx': {
        this.selectedSegment = 'transactions';
        break;
      }
      case s === 'd': {
        this.selectedSegment = 'defi';
        break;
      }
      default: 
        this.selectedSegment = 'tokens';
    }
    
  }

  async actions(type: string, payload?: any) {
    console.log('actions', type, payload);
    switch (true) {
      case type === 'add-account': {
        const {data, role} = await this._promptPublicAdress();
        if (role !== 'ok') return;
        this._loaderService.setStatus(true);
        const {values: {address = null}} = data;
        await this._walletService.addWallet(address);
        this._loaderService.setStatus(false);
        const ionPopover = await this._popoverCtrl.getTop();
        if (ionPopover) {
          ionPopover.dismiss();
        }
        break;
      }
      case type === 'toggle-account': {
        const {account = null, event: {target: {checked = false}}} = payload;
        if (!account) return;
        this._loaderService.setStatus(true);
        const ionPopover = await this._popoverCtrl.getTop();
        if (ionPopover) {
          ionPopover.dismiss();
        }
        await this._walletService.toggleWallet(account, checked);
        this._loaderService.setStatus(false);
        break;
      }
      case type === 'receive-asset': {
        // generate qrcode with account address and displax with modal using angular pipe
        this.isReceiveAssetsModalOpen$.next(true);
        break;
      }
      case type === 'swap-asset': {
        const {item:asset = null} = payload;
        const {data, role} = await this._promptSwapAsset(asset);
        if (role !== 'ok') {
          return;
        }
        const { transactionHash, status } = data as TransactionReceipt;
        console.log('XXXXX', transactionHash, status, data );
        // reload evm assets list
        this._walletService.refreshEVMTokenBalances();
        const ionToast = await this._toastCtrl.create({
          message: `Swap with succes. View on blockscan`,
          buttons: [
            { icon: 'open-outline', handler: () => {
              // TODO: open on blockscan
              throw new Error('Feature Not implemented yet');
            }}
          ],
          duration: 10000,
          color: 'success',
          position: 'bottom'
        });
        await ionToast.present();

        break;
      }
      case type === 'filterByChain': {
        let chain, showTestnet;
        // open modal with list of chains
        if (!payload) {
          const tokensBalances = await firstValueFrom(this._walletService.tokensBalances$);
          const ionModal = await this._modalCtrl.create({
            component: ChainSelectorComponent,
            cssClass: [],
            componentProps: {
              showTestnet: this.showTestnet$.value,
              chains: tokensBalances
                .map(t => t.chain)
                // exclude duplicate
                .filter((chain, index, self) => self.findIndex(c => c.id === chain.id) === index)
                // remove testnet if showTestnet is false
                .filter(c => this.showTestnet$.value ? true : !c.isTestnet) 
            },
          });
          await ionModal.present();
          const {data, role} = await ionModal.onDidDismiss();
          if (role === 'cancel') {
            return;
          }
          chain = data?.chain;
          showTestnet = data?.showTestnet;
          if (showTestnet !== undefined) {
            this.showTestnet$.next(showTestnet);
          }
          console.log(data);
        }
        // outside brackets that allow to filter by chain and reset filter
        
        this.filterByChain$.next(chain);
        break;
      }
      case type == 'send-asset': {
        const {item: asset = null} = payload;
        if (!asset) return;
        await this._promptSendAsset(asset);
        break;
      }
      default:{
        const ionAlert = await this._alertCtrl.create({
          header: 'Not implemented',
          message: `Action "${type.toLocaleUpperCase()}" is not implemented yet`,
          buttons: ['OK'],
        });
        ionAlert.present();
        break;
      }
    }
  }

  private async _promptSendAsset(asset: TokenInterface) {
    // open modal 
    const ionModal = await this._modalCtrl.create({
      component: SendAssetComponent,
      componentProps: {
        asset
      },
      cssClass: ['modalAlert']
    });
    await ionModal.present();
    const {data, role} = await ionModal.onDidDismiss();
    if (role !== 'send') {
      return;
    }
    const {to, amount: send_token_amount} = data;
    // display loader
    this._loaderService.setStatus(true);
    // send asset
    try {
      await this._walletService.sendAsset(
        to,
        `${send_token_amount}`,
        asset.type === 'NATIVE' ? undefined : asset.address
      );
    } catch (error:any) {
      throw new Error(
        error.message||'Transaction failed. Please try again. If the problem persists, please contact support.'
      );
    }
    // hide loader
    this._loaderService.setStatus(false);
  }

  private async _promptSwapAsset(fromAsset: TokenInterface, toAsset?: TokenInterface) {
    const ionModal = await this._modalCtrl.create({
      component: SwapAssetsModalComponent,
      componentProps: {
        fromAsset,
        toAsset
      }
    });
    await ionModal.present();
    const {data, role} = await ionModal.onDidDismiss();
    this._loaderService.setStatus(false);
    return {data, role};      
  }

  private async _promptPublicAdress() {
    const ionAlert = await this._alertCtrl.create({
      header: 'Add account',
      subHeader: 'You can connect more than one account to view all your balances and transactions in one place.',
      message: 'Enter wallet public address or ENS name',
      inputs: [
        {
          name: 'address',
          type: 'text',
          placeholder: '0x...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Import',
          role: 'ok',
          cssClass: 'primary'
        }
      ]
    });
    await ionAlert.present();
    const {data, role} = await ionAlert.onDidDismiss();
    return {data, role};
  }
}
