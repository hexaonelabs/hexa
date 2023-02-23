import { Injectable } from "@angular/core";
import { DID } from 'dids';
import { ethers } from 'ethers';
import { BehaviorSubject } from "rxjs";
import { EthereumAuthProvider as EthSelfIDAuthProvider, SelfID } from '@self.id/web';
import { IIdentityService } from "@d-workspace/interfaces";

@Injectable()
export class DIDService implements IIdentityService {
  
  public readonly did$ = new BehaviorSubject<DID>(null as any);
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

  async getAccountDID(address: string, chainParam = 'eip155:1') {
    const selfId = this._selfId$.value;
    if (!selfId) {
      throw new Error('Not authenticated');
    }
    return await selfId.client.getAccountDID(`${address}@${chainParam}`);
  }

  async getProfilData(): Promise<{ latestConnectionISODatetime: string; }> {
    const selfId = this._selfId$.value;
    if (!selfId) {
      throw new Error('Not authenticated');
    }
    const profile = await selfId.get('basicProfile');
    return profile;
  }

  async updateProfilData(data: { latestConnectionISODatetime: string; }): Promise<{ latestConnectionISODatetime: string; }> {
    const selfId = this._selfId$.value;
    if (!selfId) {
      throw new Error('Not authenticated');
    }
    await selfId.merge('basicProfile', data);
    return data;
  }

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
    await this._authWithSelfID(ethereumProvider, account);
  }

  private async _authWithSelfID(
    ethereumProvider: ethers.providers.ExternalProvider,
    account: string
  ) {
    const selfID = await SelfID.authenticate({
      authProvider: new EthSelfIDAuthProvider(ethereumProvider, account),
      ceramic: 'testnet-clay',
      threeidConnect: true,
    });
    this._selfId$.next(selfID);
    this.did$.next(selfID.did);
    await this._saveLatestConnectionDateTime();
  }

  private async _saveLatestConnectionDateTime() {
    const selfId = this._selfId$.value;
    await selfId?.set('basicProfile', {
      latestConnectionISODatetime: new Date().toISOString(),
    });
  }
}