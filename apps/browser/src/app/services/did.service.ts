import { Injectable } from "@angular/core";
// import { DID } from 'dids';
import { DID } from '@d-workspace/dids';
import { ethers, providers, getDefaultProvider } from 'ethers';
import { BehaviorSubject } from "rxjs";
import { IIdentityService } from "@d-workspace/interfaces";
import { EthereumAuthProvider as ThreeIdAuthProvider, ThreeIdConnect } from '@3id/connect';
import { EthereumAuthProvider as EthSelfIDAuthProvider, SelfID } from '@self.id/web';
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver'
import { getResolver as getKeyResolver } from 'key-did-resolver'

@Injectable()
export class DIDService implements IIdentityService {
  
  public readonly did$ = new BehaviorSubject<DID>(null as any);
  private readonly _threeID = new ThreeIdConnect('testnet-clay');
  private _selfId$ = new BehaviorSubject<SelfID>(null as any);

  async connectWallet(
    provider: ethers.providers.ExternalProvider = (window as any).ethereum, 
    account: string
  ) {
    try {
      await this._auth(provider, account);
      return true;
    } catch (error: any) {
      this.did$.next(null as any);
      throw new Error(error.message);
    }
  }


  // async getProfilData(): Promise<{ latestConnectionISODatetime: string; }> {
  //   const selfId = this._selfId$.value;
  //   if (!selfId) {
  //     throw new Error('Not authenticated');
  //   }
  //   const profile = await selfId.get('basicProfile');
  //   return profile;
  // }

  // async updateProfilData(data: { latestConnectionISODatetime: string; }): Promise<{ latestConnectionISODatetime: string; }> {
  //   const selfId = this._selfId$.value;
  //   if (!selfId) {
  //     throw new Error('Not authenticated');
  //   }
  //   await selfId.merge('basicProfile', data);
  //   return data;
  // }

  private async _auth(provider: ethers.providers.ExternalProvider = (window as any).ethereum, account: string) {
    if (!provider) {
      throw new Error('No injected Ethereum provider found');
    }
    await this._authenticateWithEthereum(provider, account);
  }

  private async _authenticateWithEthereum(
    ethereumProvider: ethers.providers.ExternalProvider,
    account: string
  ) {
    await this._connectWith3ID(ethereumProvider, account);
    // await this._saveLatestConnectionDateTime();
  }

  private async _connectWith3ID(
    ethereumProvider: ethers.providers.ExternalProvider,
    account: string
  ) {
    // Create an EthereumAuthProvider using the Ethereum provider and requested account
    const authProvider = new ThreeIdAuthProvider(ethereumProvider, account);
    // Connect the created EthereumAuthProvider to the 3ID Connect instance so it can be used to
    // generate the authentication secret
    await this._threeID.connect(authProvider);
    const did = new DID({
      // Get the DID provider from the 3ID Connect instance
      provider: this._threeID.getDidProvider(),

      // The DID resolver is used to resolve the DID document from the 3ID Connect instance 
      // and the public keys from the Key DID Resolver
      // resolver: {
      //   ...get3IDResolver(this._threeID),
      // }
    });
    this.did$.next(did);
  }

  private async _authWithSelfID(
    ethereumProvider: ethers.providers.ExternalProvider,
    account: string
  ) {
    const selfID = await SelfID.authenticate({
      authProvider: new EthSelfIDAuthProvider(ethereumProvider, account),
      ceramic: 'testnet-clay',
      // Make sure the `ceramic` and `connectNetwork` parameter connect to the same network
      connectNetwork: 'testnet-clay',
      threeidConnect: true
    });
    const did = selfID.did;
    this._selfId$.next(selfID);
    this.did$.next(did);
  }

  private async _saveLatestConnectionDateTime() {
    // const selfId = this._selfId$.value;
    // await selfId?.set('basicProfile', {
    //   latestConnectionISODatetime: new Date().toISOString(),
    // });
  }
}