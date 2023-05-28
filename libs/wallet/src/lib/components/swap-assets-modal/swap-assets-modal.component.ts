import { AfterViewChecked, AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonInput, ModalController } from '@ionic/angular';
import {
  BehaviorSubject,
  combineLatest,
  firstValueFrom,
  last,
  map,
  switchMap,
  tap,
} from 'rxjs';
import { ILoadingService, TokenInterface } from '@hexa/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import { COINS } from '../../constants/coins.constant';
import { MAINNET, TESTNETS } from '../../constants/chains.constant';
import { IGetPriceOptions } from '../../interfaces/swap-servcie.interface';
import { WalletService } from '../../services/wallet.service';

@Component({
  selector: 'hexa-swap-assets-modal',
  templateUrl: './swap-assets-modal.component.html',
  styleUrls: ['./swap-assets-modal.component.scss'],
})
export class SwapAssetsModalComponent implements OnInit, AfterViewInit {
  @ViewChild('fromAmountInput', {static: false}) fromAmountInput!: IonInput;
  @Input() public fromAsset!: TokenInterface;
  @Input() public toAsset?: TokenInterface;

  public readonly fromAssetControl = new FormControl<TokenInterface>(
    null as any
  );
  public readonly fromAmountControl = new FormControl<number>(null as any);
  public readonly toAssetControl = new FormControl<TokenInterface>(null as any);
  public readonly toAmountControl = new FormControl<number>(0);

  public readonly fromAssetBalance$ = this._walletService.tokensBalances$.pipe(
    map((tokensBalances) => {
      const token = this.fromAssetControl.value;
      return {token, tokensBalances}
    }),
    map(
      ({token, tokensBalances}) =>
        tokensBalances?.find((t) => t.symbol === token?.symbol)?.balance || 0
    )
  );
  public readonly estimatedGas$ = new BehaviorSubject<number>(0);
  public readonly assets$: BehaviorSubject<TokenInterface[]> =
    new BehaviorSubject(null as any);
  public readonly isAssetsListUiVisible$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly isLoaderVisible$ = this._loaderService.isVisible$;
  public get chainName() {
    return this._getChainName();
  }

  constructor(
    public readonly modalCtrl: ModalController,
    private readonly _walletService: WalletService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE))
    private readonly _loaderService: ILoadingService
  ) {}

  async ngOnInit() {
    const fromValue = this.fromAsset;
    this.fromAssetControl.patchValue(fromValue);
    this._loadTokensList().then(()=> this.fromAmountInput.setFocus());
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.fromAmountInput.setFocus(), 1000);
  }

  onFromAssetChange() {
    const isValid = this._checkAllFieldsIsValide();
    if (!isValid) {
      return;
    }
    this._getPrice();
  }

  async onFromAmountChange() {
    const maxBalance = await firstValueFrom(this.fromAssetBalance$);
    if (maxBalance < (this.fromAmountControl?.value||0)) {
      this.fromAmountControl.patchValue(maxBalance);
    }
    const isValid = this._checkAllFieldsIsValide();
    if (!isValid) {
      return;
    }
    this._getPrice();
  }

  onToAssetChange() {
    const isValid = this._checkAllFieldsIsValide();
    if (!isValid) {
      return;
    }
    this._getPrice();
  }

  async reviewSwap() {
    const isValid = this._checkAllFieldsIsValide();
    if (!isValid) {
      return;
    }
    this._swapAssets();
  }

  private async _loadTokensList() {
    const { chain: {id = undefined} } = this.fromAssetControl.value || this.fromAsset;
    const data = COINS.filter((c) => c?.chain.id === id) as TokenInterface[];
    // const isStored = localStorage.getItem('hexa:wallet:tokenlist');
    // let data: TokenInterface[] = [];
    // if (isStored) {
    //   data = JSON.parse(isStored);
    // } else {
    //   const response = await fetch('https://tokens.coingecko.com/uniswap/all.json');
    //   const {tokens} = await response.json();
    //   data = tokens;
    //   // save localstorage
    //   localStorage.setItem('hexa:wallet:tokenlist', JSON.stringify(data));
    // }
    this.assets$.next(data);
  }

  private async _getPrice() {
    this.estimatedGas$.next(0);
    this.toAmountControl.patchValue(null);
    const fromAmount = this.fromAmountControl.value || 0;
    const decimals = this.fromAssetControl.value?.decimals || 16;
    const amount = Number(fromAmount * 10 ** decimals);
    const sellToken = this.fromAssetControl.value?.address;
    const buyToken = this.toAssetControl.value?.address;
    const fromChainId = this.fromAssetControl.value?.chain?.id;
    const toChainId = this.toAssetControl.value?.chain?.id;
    if (fromChainId !== toChainId || !fromChainId || !toChainId) {
      throw new Error(`Cross chain swap currently not implemented.`);
    }
    if (!sellToken || !buyToken) {
      return;
    }
    const params: IGetPriceOptions = {
      sellToken,
      buyToken,
      sellAmount: amount,
      chainId: fromChainId,
    };
    // Fetch the swap price.
    const { buyAmount, estimatedGas } =
      await this._walletService.getPriceToSwapAsset({
        ...params,
        strategyType: '0x',
      });
    this.toAmountControl.patchValue(buyAmount / 10 ** decimals);
    this.estimatedGas$.next(estimatedGas);
  }

  private async _swapAssets() {
    const account = await firstValueFrom(this._walletService.account$);
    const fromAmount = this.fromAmountControl.value || 0;
    const decimal = this.fromAssetControl.value?.decimals || 16;
    const amount = Number(fromAmount * 10 ** decimal);
    const fromChainId = this.fromAssetControl.value?.chain.id;
    const toChainId = this.toAssetControl.value?.chain.id;
    if (fromChainId !== toChainId || !fromChainId || !toChainId) {
      throw new Error(`Cross chain swap is currently not implemented.`);
    }
    const params = {
      sellToken: `${this.fromAssetControl.value?.address}`,
      buyToken: `${this.toAssetControl.value?.address}`,
      sellAmount: `${amount}`,
      takerAddress: account,
      chainId: fromChainId,
    };
    this._loaderService.setStatus(true);
    const txReceipt = await this._walletService
      .swapAssets({
        ...params,
        strategyType: '0x',
      })
      .catch((err: Error) => {
        this._loaderService.setStatus(false);
        throw err;
      });
    this.modalCtrl.dismiss(txReceipt, 'ok');
  }

  private _checkAllFieldsIsValide() {
    return (
      Boolean(this.fromAssetControl.value) &&
      Boolean(this.toAssetControl.value) &&
      Boolean(this.fromAmountControl.value)
    );
  }

  private _getChainName() {
    const { chain: {id: selectedChainId} } =
      this.fromAssetControl.value || this.fromAsset;
    const chainName = `${
      [...TESTNETS, ...MAINNET].find((c) => c.chainId === selectedChainId)
        ?.name || 'ethereum'
    }`;
    return chainName;
  }
}
