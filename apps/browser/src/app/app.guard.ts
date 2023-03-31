import { inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { filter, firstValueFrom } from 'rxjs';
import {
  IIdentityService,
  IAuthGuardService
} from '@d-workspace/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';

@Injectable()
export class AppGuard implements CanActivate {
  private readonly _router = inject(Router);
  private readonly _authService = inject<IAuthGuardService>(
    getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)
  );
  private readonly _didService = inject<IIdentityService>(
    getInjectionToken(TOKENS_NAME.APP_DID_SERVICE)
  );

  async canActivate(): Promise<boolean> {
    let canActivateThisRoute = false;
    const isAuthenticate = this._didService?.did$?.value?.authenticated;
    if (!isAuthenticate) {
      const isReconnected = await this._isReconnect();
      if (isReconnected === true) {
        canActivateThisRoute = true;
      } else {
        await this._router.navigate(['/auth/login']);
        canActivateThisRoute = false;
      }
    } else {
      canActivateThisRoute = true;
    }
    return canActivateThisRoute;
  }

  private async _isReconnect() {
    const data = window.localStorage.getItem('connectedWallets');
    if (!data) {
      return false;
    }
    const previouslyConnectedWallets = JSON.parse(data);
    if (!previouslyConnectedWallets) {
      return false;
    }
    // Connect the most recently connected wallet (first in the array)
    await this._authService.connectWallet(previouslyConnectedWallets[0]);
    await firstValueFrom(
      this._authService.isWaiting$.pipe(filter((isWaiting) => !isWaiting))
    );
    const isAuthenticate = this._didService?.did$?.value?.authenticated;
    return isAuthenticate;
  }
}
