import { AfterViewChecked, AfterViewInit, Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InfiniteScrollCustomEvent, IonInput, IonSearchbar, ModalController } from '@ionic/angular';
import {
  BehaviorSubject,
  Observable,
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
import { IGetPriceOptions, IGetQuoteOptions } from '../../interfaces/swap-servcie.interface';
import { WalletService } from '../../services/wallet.service';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'hexa-swap-assets-modal',
  templateUrl: './swap-assets-modal.component.html',
  styleUrls: ['./swap-assets-modal.component.scss'],
})
export class SwapAssetsModalComponent implements OnInit, AfterViewInit {
  @ViewChild(IonSearchbar, { static: false, read: ElementRef })
  public readonly searchbarElement!: ElementRef<IonSearchbar>;
  @ViewChild('fromAmountInput', {static: false}) fromAmountInput!: IonInput;
  @ViewChild('swiperElement', {static: false, read: ElementRef}) swiperRef!: ElementRef<SwiperContainer>;
  @Input() public fromAsset!: TokenInterface;
  @Input() public toAsset?: TokenInterface;

  public readonly fromAssetControl = new FormControl<TokenInterface>(
    null as any
  );
  public readonly fromAmountControl = new FormControl<number>(null as any);
  public readonly toAssetControl = new FormControl<Partial<TokenInterface>>(null as any);
  public readonly toAmountControl = new FormControl<number>(0);
  private readonly _toRawAmountControl = new FormControl<number>(0);

  public readonly fromAssetBalance$ = this._walletService.tokensBalances$.pipe(
    map((tokensBalances) => {
      const token = this.fromAssetControl.value;
      return {token, tokensBalances}
    }),
    map(
      ({token, tokensBalances}) =>
        tokensBalances?.find((t) => t.symbol === token?.symbol && t.chain.id === token.chain.id)?.balance || 0
    )
  );
  public readonly estimatedGas$ = new BehaviorSubject<number>(0);
  public readonly filterByValue$ = new BehaviorSubject<string>(null as any);
  private readonly _assets$: BehaviorSubject<Partial<TokenInterface>[]> =
    new BehaviorSubject(null as any);
  public readonly isAssetsListUiVisible$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public readonly maxAssetsDisplayed$ = new BehaviorSubject(15);
  public readonly assets$: Observable<Partial<TokenInterface>[]> = combineLatest([
    this._assets$.asObservable(),
    this.filterByValue$.asObservable(),
  ]).pipe(
    map(([assets, filterByValue]) => {
      if (assets === null) {
        return null as any;
      }
      if (!filterByValue) {
        return assets;
      }
      return assets?.filter((a) =>
        a.symbol?.toLowerCase()?.includes(filterByValue.toLowerCase())
      );
    })
  );
  public readonly isLoaderVisible$ = this._loaderService.isVisible$;
  public get chainName() {
    return this._getChainName();
  }
  public readonly strategySlideIndex$ = new BehaviorSubject(0);
  public readonly availableChains = [...MAINNET];
  public readonly tokenListSelectedChainId$ = new BehaviorSubject<number>(null as any);
  public readonly swapeStrategies$ = new BehaviorSubject(null as any);
  public readonly selectedSwapeStrategy$ = new BehaviorSubject(null as any);

  constructor(
    public readonly modalCtrl: ModalController,
    private readonly _walletService: WalletService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE))
    private readonly _loaderService: ILoadingService
  ) {}

  async ngOnInit() {
    const fromValue = this.fromAsset;
    if (!fromValue.chain) {
      throw new Error(`Chain id is not defined.`);
    }
    this.fromAssetControl.patchValue(fromValue);
    // trigger chain change to preload available assets list
    this.onTokenListSelectedChainChange(fromValue.chain.id);
  }

  public ngAfterViewInit(): void {
    setTimeout(() => this.fromAmountInput.setFocus(), 1000);
  }

  onSearchByName(payload: any) {
    const {
      detail: { value = null },
    } = payload;
    this.filterByValue$.next(value);
  }

  onIonInfinite(event: any) {
    // check if we need to load more assets
    if (this.maxAssetsDisplayed$.value >= this._assets$.value?.length) {
      event.target.complete();
      return;
    }
    const t = setTimeout(() => {
      const maxAssetsDisplayed = this.maxAssetsDisplayed$.value + 15;
      this.maxAssetsDisplayed$.next(maxAssetsDisplayed);
      event.target.complete();
    }, 500);
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

  async onToAssetChange() {
    // load token price 
    const token = this.toAssetControl.value;
    const response = await fetch(`https://li.quest/v1/token?chain=${token?.chain?.id}&token=${token?.address}`);
    const {priceUSD = undefined} = await response.json();
    this.toAssetControl.patchValue({...token, priceUSD});
    const isValid = this._checkAllFieldsIsValide();
    if (!isValid) {
      return;
    }
    // reset filters
    this.filterByValue$.next(null as any);
    this._getPrice();
  }

  async onTokenListSelectedChainChange(chainId: number) {
    this.tokenListSelectedChainId$.next(chainId);
    this.loadTokensList(chainId);
  }

  async reviewSwap() {
    const isValid = this._checkAllFieldsIsValide();
    if (!isValid) {
      return;
    }
    this._swapAssets();
  }

  async loadTokensList(chainId: number) {
    // reset value
    this._assets$.next(null as any);
    const id = chainId || this.fromAssetControl.value?.chain?.id || this.fromAsset?.chain?.id;
    // const data = COINS.filter((c) => c?.chain.id === id) as TokenInterface[];
    if (!id) {
      throw new Error(`Chain id is not defined.`);
    }
    const tokens = await this._walletService
      .getAvailableTokens(id)
      .then(
        // filter only tokens with exiting `address` value
        ({tokens}) => tokens?.filter(t => t.address !== undefined)
      );
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
    this._assets$.next(tokens as any);
  }

  async onSlideTo(direction: 'prev' | 'next') {
    console.log('onSlideTo', this.swiperRef.nativeElement.swiper.activeIndex, direction);
    if (direction === 'prev') {
      await this.swiperRef.nativeElement.swiper.slidePrev(125);
    } else {
      await this.swiperRef.nativeElement.swiper.slideNext(125);
    }
    await new Promise((resolve) => setTimeout(resolve, 150));
    const index = this.swiperRef.nativeElement.swiper.activeIndex;
    this.onSelectStrategy(index);
    this.strategySlideIndex$.next(index);
    // let index = direction === 'prev'
    //   ? this.swiperRef.nativeElement.swiper.activeIndex - 1
    //   : this.swiperRef.nativeElement.swiper.activeIndex + 1;

    // if (index >= this.swapeStrategies$.value.length - 1) {
    //   index = 0
    // }
    // if (index <= 0) {
    //   index = this.swapeStrategies$.value.length;
    // }
    
    // await this.swiperRef.nativeElement.swiper.slideTo(index);
    // this.onSelectStrategy(index);
  }

  async onSelectStrategy(index: number) {
    console.log('onSelectStrategy', index);
    const strategy = this.swapeStrategies$.value[index];
    this.selectedSwapeStrategy$.next(strategy);
    this.toAmountControl.patchValue(Number(strategy.toAmount) / 10 ** (this.toAssetControl.value?.decimals || 16));
    this._toRawAmountControl.patchValue(Number(strategy.toAmount));
    this.estimatedGas$.next(Number(strategy.estimatedGasUSD));
  }

  private async _getPrice() {
    this.selectedSwapeStrategy$.next(null as any);
    this.swapeStrategies$.next(null as any);
    this.estimatedGas$.next(0);
    this.toAmountControl.patchValue(null);
    const amount = this.fromAmountControl.value || 0;
    const fromDecimals = this.fromAssetControl.value?.decimals || 16;
    const fromAmount = Number(amount * 10 ** fromDecimals).toString();
    const fromTokenAddress = this.fromAssetControl.value?.address;
    const toTokenAddress = this.toAssetControl.value?.address;
    const toDecimals = this.toAssetControl.value?.decimals || 16;
    const fromChainId = this.fromAssetControl.value?.chain?.id;
    const toChainId = this.toAssetControl.value?.chain?.id;
    if (!fromChainId || !toChainId) {
      throw new Error(`Chain id is not defined.`);
    }
    if (!fromTokenAddress || !toTokenAddress) {
      return;
    }
    const params: IGetPriceOptions = {
      fromChainId,
      fromTokenAddress,
      fromAmount,
      toChainId,
      toTokenAddress,
    };
    // Fetch the swap price.
    const response =
      await this._walletService.getPriceToSwapAsset({
        ...params,
        strategyType: 'lifi',
      });
    const defaultStrategy = response[0];
    if (!defaultStrategy) {
      throw new Error(`No swap strategy found. Try again later or change destination network.`);
    }
    this.toAmountControl.patchValue(Number(defaultStrategy.toAmount) / 10 ** toDecimals);
    this._toRawAmountControl.patchValue(Number(defaultStrategy.toAmount));
    this.estimatedGas$.next(Number(defaultStrategy.estimatedGasUSD));
    this.selectedSwapeStrategy$.next(defaultStrategy);
    this.swapeStrategies$.next(response);
  }

  private async _swapAssets() {
    const account = await firstValueFrom(this._walletService.account$);
    const fromAmount = this.fromAmountControl.value || 0;
    const decimal = this.fromAssetControl.value?.decimals || 16;
    const amount = Number(fromAmount * 10 ** decimal);
    const fromChainId = this.fromAssetControl.value?.chain.id;
    const toChainId = this.toAssetControl.value?.chain?.id;
    if (fromChainId !== toChainId || !fromChainId || !toChainId) {
      throw new Error(`Cross chain swap is currently not implemented.`);
    }
    // const params: IGetQuoteOptions = {
    //   // sellToken: `${this.fromAssetControl.value?.address}`,
    //   // buyToken: `${this.toAssetControl.value?.address}`,
    //   // // sellAmount: `${amount}`,
    //   // buyAmount: `${this._toRawAmountControl.value}`,
    //   // takerAddress: account,
    //   // chainId: fromChainId,
    //   fromChainId,
    //   fromTokenAddress: `${this.fromAssetControl.value?.address}`,
    //   fromAmount: `${amount}`,
    //   toAmount: `${this._toRawAmountControl.value}`,
    //   toTokenAddress: `${this.toAssetControl.value?.address}`,
    //   toChainId: toChainId,
    //   fromWalletAddress: account,
    // };
    this._loaderService.setStatus(true);
    const txReceipt = await this._walletService
      .swapAssets({
        ...this.selectedSwapeStrategy$.value,
        strategyType: 'lifi',
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
