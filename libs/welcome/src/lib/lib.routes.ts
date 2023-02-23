import { Route } from '@angular/router';
import { WelcomePageComponent } from './containers/welcome-page/welcome-page.component';

export const welcomeRoutes: Route[] = [
  {
    path: '', 
    pathMatch: 'full', 
    component: WelcomePageComponent
  }
];
