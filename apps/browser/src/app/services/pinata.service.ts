import { inject, Injectable } from '@angular/core';
import {
  IAuthService,
  IPiningService,
  IPiningServiceConfig,
} from '@d-workspace/interfaces';
import { firstValueFrom } from 'rxjs';
import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';

@Injectable()
export class PinataService implements IPiningService {
  private readonly defaultConfig = inject<IPiningServiceConfig>(
    getInjectionToken(TOKENS_NAME.APP_PINNING_SERVICE_DEFAULT_CONFIG)
  );
  private readonly authService = inject<IAuthService>(
    getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)
  );

  async pin(cid: string) {
    const profile = await firstValueFrom(this.authService.profile$);
    const url = 'https://api.pinata.cloud/pinning/pinByHash';
    const token = profile?.ipfsConfig?.token || this.defaultConfig.token;
    if (!url || !token) {
      throw new Error('Pinata IPFS pinning service is not configured');
    }
    const body = JSON.stringify({
      hashToPin: cid,
    });
    const config: RequestInit = {
      method: 'POST',
      body,
      headers: new Headers({
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }),
    };
    await fetch(url, config)
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });
  }

  async unpin(cid: string) {
    const profile = await firstValueFrom(this.authService.profile$);
    const url = `https://api.pinata.cloud/pinning/unpin/${cid}`;
    const token = profile?.ipfsConfig?.token || this.defaultConfig.token;
    if (!url || !token) {
      throw new Error('Pinata IPFS pinning service is not configured');
    }
    const config: RequestInit = {
      method: 'DELETE',
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    };
    await fetch(url, config).catch((err) => {
      throw err;
    });
  }
}
