import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const disableConsole = () => {
  // disabling console.log in production
  window.console.log = (...data: any[]) => ({});
  // disabling console.warn in production
  window.console.warn = (...data: any[]) => ({});
  // disabling console.error in production
  window.console.error = (...data: any[]) => ({});
  // disabling console.info in production
  window.console.info = (...data: any[]) => ({});
  // disabling console.debug in production
  window.console.debug = (...data: any[]) => ({});
}

if (environment.production) {
  enableProdMode();
  disableConsole();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // Call the element loader after the platform has been bootstrapped
  .then(()=> defineCustomElements(window))
  // Global handler for unhandled promise rejections
  .catch((err) => console.error(err));
