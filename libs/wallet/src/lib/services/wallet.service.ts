import { Inject, Injectable } from "@angular/core";
import { DIDDataStore } from '@glazed/did-datastore';
import { IAuthService, IDatastoreService, ILoadingService } from "@d-workspace/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@d-workspace/token-injection";
import { BehaviorSubject, distinctUntilChanged, filter, tap } from "rxjs";
import { TokenInterface } from "../interfaces/token.interface";

const CHAIN_IDS = [
  { id: 1, name: "Ethereum Mainnet", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png' },
  // { id: 3, name: "Ropsten Testnet" },
  // { id: 4, name: "Rinkeby Testnet" },
  // { id: 5, name: "Goerli Testnet" },
  // { id: 42, name: "Kovan Testnet" },
  { id: 56, name: "Binance Smart Chain Mainnet", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/binance-coin-bnb-logo.png' },
  // { id: 97, name: "Binance Smart Chain Testnet" },
  { id: 137, name: "Polygon Mainnet", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png' },
  // {  id: 80001, name: "Polygon Mumbai Testnet", logo: 'https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png' },
  // { id: 80001, name: "Polygon Testnet" },
  { id: 43114, name: "Avalanche Mainnet", logo: "https://www.covalenthq.com/static/images/icons/display-icons/avalanche-avax-logo.png" },
  // { id: 43113, name: "Avalanche Testnet" },
  { id: 250, name: "Fantom Opera Mainnet", logo: "https://www.covalenthq.com/static/images/icons/display-icons/fantom-ftm-logo.png" },
  // { id: 4002, name: "Fantom Opera Testnet" },
  // { id: 128, name: "Heco Mainnet" },
  // { id: 256, name: "Heco Testnet" },
  // { id: 1666600000, name: "Harmony Mainnet" },
  // { id: 1666700000, name: "Harmony Test" },
  // { id: 100, name: "xDai Chain" },
  { id: 42161, name: "Arbitrum Mainnet" },
  // { id: 421611, name: "Arbitrum Testnet" },
  { id: 10,name: 'Optimism Mainnet', logo: 'https://gateway.optimism.io/static/media/optimism.caeb9392.svg' },
  // { id: 69, name: 'Optimism Testnet' }
];

const ROOT_DB_COLLECTION = 'd-wallet';

@Injectable()
export class WalletService {
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
  private readonly _tokensBalances$ = new BehaviorSubject<TokenInterface[]>( null as any);
  public readonly tokensBalances$ = this._tokensBalances$.asObservable()

  constructor(
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) private readonly _loaderService: ILoadingService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_DATASTORE_SERVICE)) private readonly _datastoreService: IDatastoreService<DIDDataStore>,
    @Inject(getInjectionToken(TOKENS_NAME.APP_WALLET_SERVICE_APIKEY)) private readonly _apiKey: string,
    @Inject(getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)) private readonly _authService: IAuthService
  ) {}

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

  async  getTokensBalances(chainId: string, address: string) {
    const res = await fetch(`https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${this._apiKey}`)
    const balances = (await res.json()).data.items;
    const formatedBalances: TokenInterface[] = balances.map((t:any) => {
        return <TokenInterface>{
            address: t.contract_address,
            name: t.contract_name,
            symbol: t.contract_ticker_symbol,
            logo: t.logo_url,
            type: t.type,
            nft_data: t.nft_data,
            decimals: t.contract_decimals,
            balance: parseFloat((t.balance / 10 ** t.contract_decimals).toFixed(4)),
            rate: t.quote_rate,
            rate24h: t.quote_rate_24h,
            value: t.quote ? parseFloat(t.quote.toFixed(2)) : 0,
            chainId: parseInt(chainId),
            chainLogo: CHAIN_IDS.find(c => c.id === parseInt(chainId))?.logo,
            ownerAddress: address
        }
    });
    return {balances: formatedBalances};
  }

  private async _loadEVMTokensBalances(account: string) {
    await Promise.all(CHAIN_IDS.map(async (chain) => {
      const {balances} = await this.getTokensBalances(
        `${chain.id}`,
        account
      );
      this._tokensBalances$.next([
        ...this._tokensBalances$.value,
        ...balances
      ]);
    })).catch(err => err);
  }
}