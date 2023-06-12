import { inject, Inject, Injectable } from "@angular/core";
import { DIDDataStore } from '@glazed/did-datastore';
import { IAuthService, IDatastoreService, IGetAvailableTokens, IGetTokensBalances, ILoadingService, IWalletServcie, TokenInterface } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { BehaviorSubject, distinctUntilChanged, filter, map, Observable, tap } from "rxjs";
import { IGetPriceOptions, IGetQuoteOptions } from "../interfaces/swap-servcie.interface";
import { OxServcie } from "./0x.service";
import { SwapeServiceStrategy } from "./swap-service.strategy";
import { COINS } from "../constants/coins.constant";

const SWAP_STRATEGIES = [
  {
    name: '0x',
    get: (apiKey: string, hexaPublicAddress: string) => new OxServcie(apiKey, hexaPublicAddress)
  }
];

const CHAIN_IDS = [
  { id: 1, name: "Ethereum", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png'},
  // { id: 3, name: "Ropsten Testnet" },
  // { id: 4, name: "Rinkeby Testnet" },
  { id: 5, name: "Goerli Testnet", isTestnet: true },
  // { id: 42, name: "Kovan Testnet" },
  { id: 56, name: "Binance Smart Chain", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/binance-coin-bnb-logo.png'},
  // { id: 97, name: "Binance Smart Chain Testnet" },
  { id: 137, name: "Polygon", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png' },
  { id: 80001, name: "Polygon Mumbai Testnet", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png', isTestnet: true },
  { id: 43114, name: "Avalanche", logo: "https://www.covalenthq.com/static/images/icons/display-icons/avalanche-avax-logo.png" },
  // { id: 43113, name: "Avalanche Testnet" },
  { id: 250, name: "Fantom Opera", logo: "https://www.covalenthq.com/static/images/icons/display-icons/fantom-ftm-logo.png" },
  // { id: 4002, name: "Fantom Opera Testnet" },
  // { id: 128, name: "Heco" },
  // { id: 256, name: "Heco Testnet" },
  // { id: 1666600000, name: "Harmony" },
  // { id: 1666700000, name: "Harmony Test" },
  // { id: 100, name: "xDai Chain" },
  { id: 42161, name: "Arbitrum" },
  // { id: 421611, name: "Arbitrum Testnet" },
  { id: 10,name: 'Optimism', logo: 'https://gateway.optimism.io/static/media/optimism.caeb9392.svg' },
  // { id: 69, name: 'Optimism Testnet' }
];

const ROOT_DB_COLLECTION = 'd-wallet';

@Injectable()
export class WalletService implements IWalletServcie {
  private readonly _config = inject<{[key: string]: string}>(getInjectionToken(TOKENS_NAME.APP_WALLET_SERVICE_APIKEYS));
  private readonly _hexaPublicAddress = inject<string>(getInjectionToken(TOKENS_NAME.APP_HEXA_PUBLICADDRES));

  public readonly account$ = this._authService.account$.pipe(
    filter(Boolean),
    distinctUntilChanged(),
    tap(async (account) => {
      if (!account) return;
      if (this._tokensBalances$.value) {
        return;
      }
      this._loaderService.setStatus(true);
      this._tokensBalances$.next([]);
      this._loadEVMTokensBalances(account);
      const wallets = await this._loadOtherWallets();
      await Promise.all(
        wallets
        .filter((w)=> !w.isDisabled)
        .map(
          (w) => this._loadEVMTokensBalances(w.address)
        )
      );
      this._loaderService.setStatus(false);
    })
  );
  private readonly _wallets$ = new BehaviorSubject<{address: string;isDisabled?: boolean;}[]>(null as any);
  public readonly wallets$ = this._wallets$.asObservable();
  private readonly _tokensBalances$ = new BehaviorSubject<TokenInterface[]>( null as any)
  public readonly tokensBalances$: Observable<TokenInterface[]> = this._tokensBalances$.asObservable().pipe(
    // add chain logo to all token
    map(tokensBalances => tokensBalances.map(token => {
      const chain = CHAIN_IDS.find(c => c.id === token?.chain.id);
      return <TokenInterface>{
        ...token,
        chain: {
          ...token.chain,
          ...chain
        }
      };
    })
  ));
  public readonly ethereumProvider$ = this._authService.ethereumProvider$;

  constructor(
    private readonly _swapService: SwapeServiceStrategy,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) private readonly _loaderService: ILoadingService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_DATASTORE_SERVICE)) private readonly _datastoreService: IDatastoreService<DIDDataStore>,
    @Inject(getInjectionToken(TOKENS_NAME.APP_WALLET_UTILS)) private readonly _utilsService: IGetTokensBalances & IGetAvailableTokens,
    @Inject(getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)) private readonly _authService: IAuthService
  ) {
    // define swap default strategy
    this._setSwapStrategy();
  }

  async addWallet(address: string) {
    const walletsData = this._wallets$.value;
    const wallets = [...walletsData, {address}];
    await this._datastoreService.saveData(
      { wallets },
      ROOT_DB_COLLECTION,
      ['wallets']
    );
    this._wallets$.next(wallets);
    await this._loadEVMTokensBalances(address);
    return {address};
  }

  async toggleWallet(address: string, isDisabled: boolean) {
    const walletsData = this._wallets$.value;
    const wallets = walletsData.map((w) => {
      if (w.address === address) {
        return { ...w, isDisabled };
      }
      return w;
    });
    // update state
    this._wallets$.next(wallets);
    // update balances value
    const balances = this._tokensBalances$.value;
    if (isDisabled) {
      const filteredBalances = balances.filter((b) => b.ownerAddress !== address);
      this._tokensBalances$.next(filteredBalances);
    } else {
      await this._loadEVMTokensBalances(address);
    }
    // finaly save to db
    await this._datastoreService.saveData(
      { wallets },
      ROOT_DB_COLLECTION,
      ['wallets']
    );
  }

  async getPriceToSwapAsset(ops:  IGetPriceOptions & { strategyType?: string | undefined; }) {
    const {strategyType = '0x', ...value} = ops as IGetPriceOptions & {strategyType?: string}; 
    this._setSwapStrategy(strategyType);
    return await this._swapService.getPrice(value);
  }

  /**
   * Method that have to define `swap` strategy using `swapService.setStrategy()` before 
   * call `getQuote()` and `swap()` method to perform assets swaping.
   * This method will exit with a `modalCtrl.close(txResult)` with `tx` details, if success or will display 
   * error message using error propagation strategy  `new Error()`
   */
  async swapAssets(ops: IGetQuoteOptions & {strategyType?: string}) {
    const provider = this._authService.ethereumProvider$.value;
    const {strategyType = '0x', ...value} = ops; 
    this._setSwapStrategy(strategyType);
    const quote = await this._swapService.getQuote(value);
    return await this._swapService.swap(provider, quote);
  }

  private async _loadOtherWallets() {
    const {wallets = []} = await this._datastoreService.getData(
      ROOT_DB_COLLECTION, 
      ['wallets'], // key
      { wallets: [] } // default value to save if not exist (optional)
    );
    // update state
    this._wallets$.next(wallets||[]);
    return this._wallets$.value;
  }

  async  getTokensBalances(chainIds: number[], address: string) {
    const result = await this._utilsService.getTokensBalances(
      chainIds, 
      address
    );
    return {
      balances: result.balances.map(b => {
        let logo =
          (b.logo?.length || 0) > 0
            ? b.logo
            : `./assets/cryptocurrency-icons/${b.symbol.toLowerCase()}.svg`;
        if (b.symbol === 'WETH') {
          logo = `https://assets.coingecko.com/coins/images/2518/large/weth.png`;
        }
        if (b.symbol === 'MATIC') {
          logo = `./assets/wallet/icons/matic.svg`;
        }
        if (b.symbol === 'WMATIC') {
          logo = `./assets/wallet/icons/wmatic.svg`;
        }
        if (b.symbol === 'aPolWMATIC') {
          logo = `./assets/wallet/icons/awmatic.svg`;
        }
        if (b.symbol === 'stMATIC') {
          logo = `./assets/wallet/icons/stmatic.svg`;
        }
        if (b.symbol === 'wstETH') {
          logo = `./assets/wallet/icons/wsteth.svg`;
        }
        return {
          ...b,
          logo,
        };
      }),
    };
  }

  async getAvailableTokens(chainId: number) {
    // ceck if is Goerli Testnet
    if (chainId === 5) {
      const tokens = COINS
        .filter(c => c.chain.id === 5)
        .map(c => {
          let logo =
            (c.logo?.length || 0) > 0
              ? c.logo
              : `./assets/cryptocurrency-icons/${c.symbol.toLowerCase()}.svg`;
          if (c.symbol === 'WETH') {
            logo = `https://assets.coingecko.com/coins/images/2518/large/weth.png`;
          }
          if (c.symbol === 'MATIC') {
            logo = `https://assets.ankr.com/charts/icon-only/matic.svg`;
          }
          return <TokenInterface>{
            ...c,
            logo,
            chain: {
              ...c.chain,
              isTestnet: true
            }
          }
        });
      return { tokens }
    }
    return await this._utilsService.getAvailableTokens(chainId);
  }

  private async _loadEVMTokensBalances(account: string) {
    const chainIds = CHAIN_IDS.map(c => c.id);
    const {balances} = await this.getTokensBalances(
      chainIds,
      account
    );
    // add token logo
    this._tokensBalances$.next([
      ...this._tokensBalances$.value,
      ...balances
    ]);
  }

  private _setSwapStrategy(strategyType: string = '0x') {
    const apiKey = this._config?.['0xapiKey'];
    // define swap default strategy
    const swapStrategy = SWAP_STRATEGIES.find(s => s.name === strategyType)?.get(apiKey, this._hexaPublicAddress);
    if (!swapStrategy) {
      throw new Error(`Swap strategy not available.`)
    }
    this._swapService.setStrategy(swapStrategy);
  }
}