import { Inject, Injectable } from "@angular/core";
import { ethers } from 'ethers';
import Onboard, {ConnectOptions} from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import ledgerModule from '@web3-onboard/ledger';
import coinbaseModule from '@web3-onboard/coinbase';
// import web3authModule from '@web3-onboard/web3auth'
import torusModule from '@web3-onboard/torus';
import { BehaviorSubject, distinctUntilChanged, filter, firstValueFrom } from "rxjs";
import { NgZone } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IAuthService, IIdentityService } from "@d-workspace/interfaces";
import { XMTPService } from "./messaging.service";

const MAINNET_RPC_URL = 'https://ethereum.publicnode.com/';
const MATIC_RPC_URL = 'https://matic-mainnet.chainstacklabs.com';
const injected = injectedModule();
const ledger = ledgerModule();
const coinbase = coinbaseModule();
// const web3Auth = web3authModule({
//   clientId: ''
// });
// const enkrypt = enrkyptModule();
const torus = torusModule();
// const walletConnect = walletConnectModule();

@Injectable()
export class Web3AuthService implements IAuthService {

  public readonly ethereumProvider$: BehaviorSubject<ethers.providers.Web3Provider> = new BehaviorSubject(null as any);
  public readonly signer$: BehaviorSubject<ethers.providers.JsonRpcSigner> = new BehaviorSubject(null as any);
  public readonly account$: BehaviorSubject<string> = new BehaviorSubject(null as any);
  public readonly profile$: BehaviorSubject<string> = new BehaviorSubject(null as any);
  public readonly onboard = this._onboard();
  public readonly did$ = this._did.did$;
  public isWaiting$ = new BehaviorSubject(false); // used by app guard to prevent navigation while waiting for wallet connection
  private unsubscribe!: () => void;

  constructor(
    private readonly _ngZone: NgZone,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _msgService: XMTPService,
    @Inject('APP_DID_SERVICE') private readonly _did: IIdentityService
  ) {
    this._init();
  }

  async connect() {
    if (this.unsubscribe) this.unsubscribe();
    try {
      const wallets = await this.onboard.connectWallet();
      if (wallets[0]) {
        const account = await firstValueFrom(this.account$.pipe(
          filter((account) => !!account),
        ));
        console.log('account', account);        
        // // get provider from signer
        // const provider = wallets[0].provider;
        // await this._did.connectWallet(provider, this.account$.value);
        // console.log('profil', profil);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async disconnect() {
    console.log('[INFO] Disconnecting wallet');
    const [primaryWallet] = this.onboard.state.get().wallets;
    if (primaryWallet) {
      await this.onboard.disconnectWallet({ label: primaryWallet.label });
    }
    window.localStorage.removeItem('connectedWallets');
    this.signer$.next(null as any);
    this.account$.next(null as any);
    this._did.did$.next(null as any);
    this.isWaiting$.next(false);
    this.unsubscribe();
    this._redirectToRoot();
  };

  async getAccountDID(address: string, chainParam?: string | undefined): Promise<string> {
    return this._did.getAccountDID(address, chainParam);
  }
  
  private async _init() {
    if (!this.onboard) {
      throw new Error('Onboard is not initialized');
    }
    const wallets = this.onboard.state.select('wallets');
    const { unsubscribe } = wallets.pipe(
      distinctUntilChanged(
        (prev, next) => JSON.stringify(prev?.[0]?.accounts?.[0]?.address||'') === JSON.stringify(next?.[0]?.accounts?.[0]?.address||'')
      ),
    ).subscribe(async(update) =>{
      console.log('[INFO] {Web3AuthService} Wallets update: ', update);
      this.isWaiting$.next(true);
      if(update?.[0]) {
        const connectedWallets = update.map(({ label }) => label)
        window.localStorage.setItem(
          'connectedWallets',
          JSON.stringify(connectedWallets)
        );
        // set the signer
        const { provider } = update[0];
        const ethersProvider = new ethers.providers.Web3Provider(
          provider,
          'any'
        );
        const accountAddress = update[0].accounts[0].address;
        // connect DID
        const isDIDConnected = await this._did
          .connectWallet(provider, accountAddress)
          .then(() => true)
          .catch((error) => error as Error);
        // throw error if DID connection failed
        if (!isDIDConnected || isDIDConnected instanceof Error) {
          await this.disconnect();
          this.isWaiting$.next(false);
          throw Error(
            isDIDConnected instanceof Error
            ? isDIDConnected.message || 'Could not connect wallet to DID service.'
            : 'Could not connect wallet to DID service.'
          );
        }
        // run inside angular zone to avoid change detection errors
        this._ngZone.run(async () => {
          // update state
          this.ethereumProvider$.next(ethersProvider);
          this.signer$.next(ethersProvider.getSigner());
          this.account$.next(accountAddress);
          this.isWaiting$.next(false);
          await this._connectOthersServices();
        });
      } else {
        await this.disconnect();
      }
      this.isWaiting$.next(false);
    });
    // store unsubscribe function to disconnect wallet on destroy
    this.unsubscribe = unsubscribe;
  }

  private _onboard() {
    return Onboard({
      wallets: [
        injected, 
        ledger,
        coinbase,
        // enkrypt,
        torus
      ],
      chains: [
        {
          id: "0x1", // chain ID must be in hexadecimel
          token: "ETH", // main chain token
          namespace: "evm",
          label: "Ethereum Mainnet",
          rpcUrl: MAINNET_RPC_URL
        },
        // {
        //   id: "0x3",
        //   token: "tROP",
        //   namespace: "evm",
        //   label: "Ethereum Ropsten Testnet",
        //   rpcUrl: ROPSTEN_RPC_URL
        // },
        // {
        //   id: "0x4",
        //   token: "rETH",
        //   namespace: "evm",
        //   label: "Ethereum Rinkeby Testnet",
        //   rpcUrl: RINKEBY_RPC_URL
        // },
        // {
        //   id: '0x89',
        //   token: 'MATIC',
        //   label: 'Polygon',
        //   rpcUrl: MATIC_RPC_URL
        // }
      ],
      appMetadata: {
        name: "d-workspace",
        icon: "./assets/images/logo-colored.svg",
        logo: "./assets/images/logo-colored.svg",
        description: "Decentralized workspace solution",
        recommendedInjectedWallets: [
          { name: "Coinbase", url: "https://wallet.coinbase.com/" },
          { name: "MetaMask", url: "https://metamask.io" }
        ]
      },
      accountCenter: {
        desktop: {
          minimal: true,
          enabled: true,
          position: 'topRight'
        },
        mobile: {
          minimal: true,
          enabled: true,
          position: 'topRight',
        }
      }
    });
  }

  /**
   * Method that check the current route and redirect to root if the route is not the root
   */
  private _redirectToRoot() {
    if (this._router.url !== '/') {
      this._router.navigate(['/'], { relativeTo: this._route });
    }
  }

  private async _connectOthersServices() {
    const {latestConnectionISODatetime, latestNotifedISODatetime} = await this._did.getProfilData();
    const mostRecentDate = [latestConnectionISODatetime, latestNotifedISODatetime]
          .filter(Boolean)
          .sort(
            (a, b) =>
              (b ? new Date(b).getTime() : new Date().getTime()) -
              (a ? new Date(a).getTime() : new Date().getTime())
          )
          .shift();
    // build options for xmtp messages fetching
    // this will only return messages that are newer than the `mostRecentDate` constante
    const opts = mostRecentDate
      ? {
          startTime: new Date(mostRecentDate),
          endTime: new Date(),
        }
      : undefined;
    const provider = this.ethereumProvider$.value;
    await this._msgService.init(provider, {
      ...opts,
      // startTime: new Date('2023-01-01'),
    } as any);
  }
}