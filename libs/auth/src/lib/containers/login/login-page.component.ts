import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {IAuthService, ILoadingService } from '@hexa/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';

@Component({
  selector: 'hexa-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public readonly title = 'Login Page ';
  public readonly account$ = this._authService.account$;
  public readonly isLoaderVisible$ = this.loaderService.isVisible$;

  constructor(
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) private readonly loaderService: ILoadingService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)) private readonly _authService: IAuthService,
    private readonly _router: Router
  ) {}

  async connectWallet() {
    this.loaderService.setStatus(true);
    const isConnected = await this._authService.connect();
    if (isConnected) {
      // const profil = await this._datastoreService.getProfileFromCeramic();
      // console.log('[INFO] Ceramic profil', profil);
      this._router.navigate(['/h']);
    }
    this.loaderService.setStatus(false);
  }

  async disconnect() {
    this.loaderService.setStatus(true);
    this._authService.disconnect();
    this.loaderService.setStatus(false);
  };
}