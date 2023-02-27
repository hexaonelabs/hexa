import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';
import { IonicModule } from '@ionic/angular';
import { CeramicClient } from '@ceramicnetwork/http-client';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { DashboardComponent } from './dashboard.component';
import { AppGuard } from './app.guard';
import { Web3AuthService } from './web3-auth.service';
import { DIDService } from './did.service';
import { DatastoreService } from './datastore.service';
import { IPFSService } from './ipfs.service';
import { PinataService } from './pinata.service';
import { NotificationService } from './notification.service';
import { EncryptionService } from './encryption.service';
import { XMTPService } from './messaging.service';
import { GlobalErrorHandlerService } from './global-error-handler.service';
import { environment } from '../environments/environment';
import { ILoadingService } from '@d-workspace/interfaces';

const CERAMIC_CLIENT = new CeramicClient('https://ceramic-clay.3boxlabs.com');
const LOADERCLIENT = new BehaviorSubject<boolean>(false);
const ERROR_PROVIDER = 
  environment.production
    ? [{
        provide: ErrorHandler,
        useClass: GlobalErrorHandlerService,
      }]
    : [];

@NgModule({
  declarations: [
    AppComponent, 
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot({
      mode: 'ios'
    }),
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' , useHash: true }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    AppGuard,
    XMTPService,
    ...ERROR_PROVIDER,
    {
      provide: 'APP_LOADER_SERVICE',
      useFactory: (): ILoadingService => {
        return {
          setStatus: (status: boolean) => {
            console.log('Loader status: ', status);
            LOADERCLIENT.next(status);
          },
          isVisible$: LOADERCLIENT.asObservable().pipe(
            debounceTime(250),
            distinctUntilChanged()
          ),
        };
      }
    },
    {
      provide: 'APP_IS_PROD',
      useValue: environment.production
    },
    {
      provide: 'APP_PINNING_SERVICE_CONFIG',
      useValue: {
        pinning_endpoint: environment.ipfs.pinning_service_endpoint,
        unpinning_endpoint: environment.ipfs.unpinning_service_endpoint,
        token: environment.ipfs.pinning_service_token,
      }
    },
    {
      provide: 'APP_WALLET_SERVICE_APIKEY',
      useValue: environment.wallet_service_apikey
    },
    {
      provide: 'APP_WEB3AUTH_SERVICE',
      useClass: Web3AuthService
    },
    {
      provide: 'APP_CERAMIC_SERVICE',
      useValue: CERAMIC_CLIENT
    },
    {
      provide: 'APP_DID_SERVICE',
      useClass: DIDService
    },
    {
      provide: 'APP_DATASTORE_SERVICE',
      useClass: DatastoreService
    },
    {
      provide: 'APP_IPFS_SERVICE',
      useClass: IPFSService
    },
    {
      provide: 'APP_IPFS_PINNING_SERVICE',
      useClass: PinataService
    },
    {
      provide: 'APP_ENCRYPTION_SERVICE',
      useClass: EncryptionService
    },
    {
      provide: 'APP_NOTIFICATION_SERVICE',
      useClass: NotificationService
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
