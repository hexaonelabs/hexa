import { Route } from '@angular/router';
import { DrivePageComponent } from './containers/drive-page/drive-page.component';

export const driveRoutes: Route[] = [
  {
    path: '', 
    pathMatch: 'full', 
    component: DrivePageComponent
  }
];
