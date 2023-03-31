import { Inject, Injectable } from '@angular/core';
import { ethers } from 'ethers';
import { Magic } from 'magic-sdk';
import { WebAuthnExtension } from '@magic-ext/webauthn';
import { recoverPersonalSignature } from "@metamask/eth-sig-util";
import { BehaviorSubject} from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import {
  IAuthService,
  IDatastoreService,
  IIdentityService,
  IAuthUser,
  IAuthGuardService,
  IMessagingService,
} from '@d-workspace/interfaces';
import { CeramicClient } from '@ceramicnetwork/http-client';
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver';
import { DIDDataStore } from '@glazed/did-datastore';
import { Caip10Link } from '@ceramicnetwork/stream-caip10-link';
import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';

const DB_NAME = 'd-workspace';
const MAINNET_RPC_URL = 'https://rpc.ankr.com/eth';
const MATIC_RPC_URL = 'https://matic-mainnet.chainstacklabs.com';

@Injectable()
export class Web3AuthService implements IAuthService, IAuthGuardService {
  public readonly ethereumProvider$: BehaviorSubject<ethers.providers.Web3Provider> =
    new BehaviorSubject(null as any);
  public readonly signer$: BehaviorSubject<ethers.providers.JsonRpcSigner> =
    new BehaviorSubject(null as any);
  public readonly account$: BehaviorSubject<string> = new BehaviorSubject(
    null as any
  );
  public readonly profile$: BehaviorSubject<IAuthUser> = new BehaviorSubject(
    null as any
  );
  public readonly magic = this._magicWeb3();
  public readonly did$ = this._did.did$;
  public isWaiting$ = new BehaviorSubject(false); // used by app guard to prevent navigation while waiting for wallet connection

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    @Inject(getInjectionToken(TOKENS_NAME.APP_MESSAGING_SERVICE))
    private readonly _msgService: IMessagingService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_DID_SERVICE))
    private readonly _did: IIdentityService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_CERAMIC_SERVICE))
    private readonly _ceramic: CeramicClient,
    @Inject(getInjectionToken(TOKENS_NAME.APP_DATASTORE_SERVICE))
    private readonly _datastore: IDatastoreService<DIDDataStore>,
    @Inject(getInjectionToken(TOKENS_NAME.APP_AUTH_APIKEY)) 
    private readonly _authApiKey: string,
  ) {
  }

  async connect(accountToConnect?: string) {
    this.isWaiting$.next(true);
    // await this._connectWithOnboard();
    const {account, provider} = await this._connectWithMagic(accountToConnect);
    console.log('[INFO] Connected with Magic', {account, provider});
    const ethersProvider = new ethers.providers.Web3Provider(
      provider as any,
      'any'
    );
    // verify signature
    const isOwner = await this.signAndVerify(ethersProvider.getSigner(), account);
    if (!isOwner) {
      this.isWaiting$.next(false);
      await this.disconnect();
      throw new Error('User is not owner of this wallet. Unable to verify signature.');
    }
    await this._connectDID(provider as any, account);
    console.log('[INFO] Connected DID with Ethers provider:', {ethersProvider});
    // update profile or set default profile if not exist
    await this.updateProfilData({
      latestConnectionISODatetime: new Date().toISOString(),
    });
    console.log('[INFO] Updated user profil data.');
    // update state
    this.ethereumProvider$.next(ethersProvider);
    this.signer$.next(ethersProvider.getSigner());
    this.account$.next(account);
    this.isWaiting$.next(false);
    // try listen events wallet
    ethersProvider.on('accountsChanged', async (accounts: string[]) => {
      console.log('[INFO] Accounts changed', accounts);
      await this.disconnect();
    });
    ethersProvider.on("network", async (newNetwork, oldNetwork) => {
      // When a Provider makes its initial connection, it emits a "network"
      // event with a null oldNetwork along with the newNetwork. So, if the
      // oldNetwork exists, it represents a changing network
      if (oldNetwork) {
        await this.disconnect();
      }
    });
    await this._connectOthersServices();
    return Boolean(account)
  }

  async connectWallet(address: string): Promise<boolean> {
    return this.connect(address);
  }

  async disconnect() {
    console.log('[INFO] Disconnecting wallet');
    await this.magic.wallet.disconnect();
    window.localStorage.removeItem('connectedWallets');
    this.signer$.next(null as any);
    this.account$.next(null as any);
    this.profile$.next(null as any);
    this._did.did$.next(null as any);
    this.isWaiting$.next(false);
    // this.unsubscribe();
    this._redirectToRoot();
  }

  async getAccountDID(
    address: string,
    chainParam = 'eip155:1'
  ): Promise<string> {
    const link = await Caip10Link.fromAccount(
      this._ceramic,
      `${address}@${chainParam}`
    );
    if (link.did == null) {
      throw new Error(`No DID found for ${address}`);
    }
    return link.did;
  }

  async signAndVerify(signer: ethers.providers.JsonRpcSigner, account: string) {
    const message = 'd-workspace authentication with wallet signature.';
    const signedMessage = await signer.signMessage(message).catch(async (error) => {
      await this.disconnect();
      throw error;
    });
    // recover the public address of the signer to verify
    const recoveredAddress = recoverPersonalSignature({
      data: message,
      signature: signedMessage,
    });
    return recoveredAddress.toLocaleLowerCase() === account.toLocaleLowerCase();
  };

  private async _connectDID(
    provider: ethers.providers.ExternalProvider | undefined,
    accountAddress: string
  ) {
    // connect DID service
    const isDIDConnected = await this._did
      .connectWallet(provider, accountAddress)
      .then(() => true)
      .catch((error) => error as Error);
    // set resolver
    console.log('[INFO] Set resolver');
    const resolvers = { ...get3IDResolver(this._ceramic) };
    const did = this._did.did$.value;
    did.setResolver(resolvers as any);
    console.log('[INFO] Authenticate with DID provider');
    // Authenticate the DID using the 3ID provider from 3ID Connect, this will trigger the
    // authentication flow using 3ID Connect and the Ethereum provider
    const isAuth = await did.authenticate();
    this._ceramic.did = did;
    console.log('[INFO] DID ', isAuth);
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
  }

  private async _connectWithMagic(accountToConnect?: string) {
    const provider = this.magic.rpcProvider;  
    if (accountToConnect) {
      return {
        account: accountToConnect, 
        provider
      }
    }
    const accounts = await this.magic.wallet.connectWithUI();
    const account = accounts[0];
    // set local storage
    window.localStorage.setItem('connectedWallets', JSON.stringify(accounts));
    return {
      account, provider
    }
  }

  private _magicWeb3() {
    const customNodeOptions = {
      rpcUrl: MAINNET_RPC_URL, // your ethereum, polygon, or optimism mainnet/testnet rpc URL
      chainId: 1 // corresponding chainId for your rpc url
    }
    const magic = new Magic(this._authApiKey, {
      network: customNodeOptions, // 'mainnet', // or your own custom node url in the format of { rpcUrl: string chainId: number }
      extensions: [new WebAuthnExtension()],
    });
    return magic;
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
    const { latestConnectionISODatetime, latestNotifedISODatetime } =
      await this.getProfilData();
    const mostRecentDate = [
      latestConnectionISODatetime,
      latestNotifedISODatetime,
    ]
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
    // this will only init the service and not connect the wallet
    if (this._msgService.init) {
      await this._msgService.init(provider, {
        ...opts,
        // startTime: new Date('2023-01-01'),
      });
    }
  }

  async getProfilData(): Promise<IAuthUser> {
    const profil = await this._datastore.getData(
      DB_NAME, // database name
      ['basicProfile'], // datbase collections
      // default values if database is empty
      {
        latestConnectionISODatetime: new Date('2000-01-01').toISOString(),
        latestNotifedISODatetime: new Date('2000-01-01').toISOString(),
        creationISODatetime: new Date().toISOString(),
      }
    );
    this.profile$.next(profil);
    return profil;
  }

  async updateProfilData(data: Partial<IAuthUser>): Promise<IAuthUser> {
    const profil = this.profile$.value || (await this.getProfilData());
    const result = await this._datastore.saveData(
      {
        ...profil,
        ...data,
      },
      DB_NAME, // database name
      ['basicProfile'] // datbase collections,
    );
    this.profile$.next(result);
    return result;
  }
}
