import { Component, Inject, OnInit } from '@angular/core';
import { ILoadingService } from '@d-workspace/interfaces';
import { environment } from '../../../environments/environment';
import '@khmyznikov/pwa-install';
import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';

@Component({
  selector: 'd-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) public readonly loaderService: ILoadingService
  ) {}

  ngOnInit(): void {
    console.log(
      `[INFO] d-workspace PWA APP Version: ${
        environment.production ? 'PROD' : 'DEV'
      } ${environment.version}`
    );
  }
}
