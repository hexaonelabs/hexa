import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { IonicModule } from '@ionic/angular';

import { appRoutes } from './app.routes';
import { AppGuard } from './app.guard';
import { COMPONENTS, MAIN_COMPONENT } from './components';
import { environment } from '../environments/environment';
import { PROVIDERS } from './providers';
import { PIPES } from './pipes';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot({
      mode: 'ios',
    }),
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabledBlocking',
      useHash: true,
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    AppGuard,
    ...PROVIDERS,
  ],
  bootstrap: [MAIN_COMPONENT],
})
export class AppModule {}
