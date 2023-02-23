import { Route } from '@angular/router';
import { WalletPageComponent } from './containers/wallet-page/wallet-page.component';

export const walletRoutes: Route[] = [
  {
    path: '', 
    pathMatch: 'full', 
    component: WalletPageComponent
  }
];
