import { Component, Inject, OnInit } from '@angular/core';
import { EnvironmentInjector } from '@angular/core';
import { ILoadingService } from '@hexa/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import { environment } from '../../../environments/environment';
import '@khmyznikov/pwa-install';

@Component({
  selector: 'hexa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    public readonly environmentInjector: EnvironmentInjector,
    @Inject(getInjectionToken(TOKENS_NAME.APP_IS_PROD))
    public readonly isProd: boolean,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE))
    public readonly loaderService: ILoadingService
  ) {}

  ngOnInit(): void {
    const version = environment.version;
    const env = `[INFO] hexa PWA APP\nVersion: ${version} - ${
      this.isProd ? 'PROD' : 'DEV'
    }`;
    (window as any)['env'] = env;
    console.log(env);
  }
}
