import { Component, Inject, OnInit } from '@angular/core';
import { EnvironmentInjector } from '@angular/core';
import { ILoadingService } from '@d-workspace/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';
import { environment } from '../../../environments/environment';
import '@khmyznikov/pwa-install';

@Component({
  selector: 'd-workspace-root',
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
    const env = `[INFO] d-workspace PWA APP\nVersion: ${version} - ${
      this.isProd ? 'PROD' : 'DEV'
    }`;
    (window as any)['env'] = env;
    console.log(env);
  }
}
