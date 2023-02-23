import { Route } from '@angular/router';
import { LoginPageComponent } from './containers/login/login-page.component';

export const authRoutes: Route[] = [
  {
    path: '', 
    pathMatch: 'full', 
    redirectTo: 'login'
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];
