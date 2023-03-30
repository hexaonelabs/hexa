import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  // Call the element loader after the platform has been bootstrapped
  .then(()=> defineCustomElements(window))
  // Global handler for unhandled promise rejections
  .catch((err) => console.error(err));
