import { inject, Inject, Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { filter, firstValueFrom } from 'rxjs';
import {
  IIdentityService,
  IAuthGuardService,
  getInjectionToken,
  TOKENS_NAME,
} from '@d-workspace/interfaces';

@Injectable()
export class AppGuard implements CanActivate {
  private readonly _router = inject(Router);
  private readonly _authService = inject<IAuthGuardService>(
    getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)
  );

  constructor(
    @Inject('APP_DID_SERVICE')
    private _didService: IIdentityService
  ) {}

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
    // this._authService.onboard.connectWallet({ autoSelect: previouslyConnectedWallets[0] });
    // You can also auto connect "silently" and disable all onboard modals to avoid them flashing on page load
    await this._authService.onboard.connectWallet({
      autoSelect: { label: previouslyConnectedWallets[0], disableModals: true },
    });
    // OR - loop through and initiate connection for all previously connected wallets
    // note: This UX might not be great as the user may need to login to each wallet one after the other
    // for (walletLabel in previouslyConnectedWallets) {
    //   await onboard.connectWallet({ autoSelect: walletLabel })
    // }
    // check is service is waiting for signatur and wait until it is done
    await firstValueFrom(
      this._authService.isWaiting$.pipe(filter((isWaiting) => !isWaiting))
    );
    const isAuthenticate = this._didService?.did$?.value?.authenticated;
    return isAuthenticate;
  }
}
