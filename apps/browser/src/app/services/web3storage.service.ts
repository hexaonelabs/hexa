import { inject, Injectable } from "@angular/core";
import { IPiningService, IAuthService } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { firstValueFrom } from "rxjs";

@Injectable()
export class Web3storageService implements IPiningService {

  private readonly _authService = inject<IAuthService>(getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE));

  async pin(cid: string) {
    const profile = this._authService.profile$.value;
    const token = profile?.ipfsConfig?.token;
    const url = 'https://api.web3.storage/pins';
    if (!url || !token) {
      throw new Error('IPFS pinning service is not configured');
    }
    const body = JSON.stringify({
      "cid": cid
    });
    const config: RequestInit = {
      method: 'POST',
      body,
      headers: new Headers({ 
        'Authorization': `Bearer ${token}`, 
        'Content-Type': 'application/json'
      })
    };
    await fetch(url, config)
      .then(res => res.json())
      .catch(err => {
        throw err;
      });   
  }

  async unpin(cid: string) {
    const profile = this._authService.profile$.value;
    const token = profile?.ipfsConfig?.token;
    const url = `https://api.web3.storage/pins'/${cid}`;
    if (!url || !token) {
      throw new Error('IPFS pinning service is not configured');
    }
    const config: RequestInit = {
      method: 'DELETE',
      headers: new Headers({ 
        'Authorization': `Bearer ${token}`, 
      })
    };
    await fetch(url, config)
      .catch(err => {
        throw err;
      });
  }

}