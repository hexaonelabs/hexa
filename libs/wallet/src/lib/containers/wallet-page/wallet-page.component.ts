import { Component, Inject, OnInit } from "@angular/core";
import { ILoadingService } from "@d-workspace/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@d-workspace/token-injection";
import { AlertController, ModalController, PopoverController, ToastController } from "@ionic/angular";
import { ethers } from "ethers";
import { BehaviorSubject, distinctUntilChanged, filter, firstValueFrom, map, tap } from "rxjs";
import { SwapAssetsModalComponent } from "../../components/swap-assets-modal/swap-assets-modal.component";
import { TokenInterface } from "../../interfaces/token.interface";
import { WalletService } from "../../services/wallet.service";

@Component({
  selector: "d-workspace-wallet-page",
  templateUrl: "./wallet-page.component.html",
  styleUrls: ["./wallet-page.component.scss"]
})
export class WalletPageComponent  {
  public selectedSegment: 'tokens'|'nfts'|'transactions'|string = 'nfts';
  public readonly account$ = this._walletService.account$;
  public readonly wallets$ = this._walletService.wallets$;
  public readonly tokensBalances$ = this._walletService.tokensBalances$;

  constructor(
    private readonly _alertCtrl: AlertController,
    private readonly _popoverCtrl: PopoverController,
    private readonly _modalCtrl: ModalController,
    private readonly _walletService: WalletService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) private readonly _loaderService: ILoadingService,
  ) {}

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
      case type === 'swap-asset': {
        const {item:asset = null} = payload;
        const { data, role } = await this._promptSwapAsset(asset);
        console.log('swap-asset', asset, data);
        if (role !== 'ok') return;
        // TODO: implement swap with service
        break;
      }
      default:
        break;
    }
    
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
