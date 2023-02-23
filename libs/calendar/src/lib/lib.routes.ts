import { Route } from '@angular/router';
import { CalendarPageComponent } from './containers/calendar-page/calendar-page.component';

export const calendarRoutes: Route[] = [
  {
    path: '', 
    pathMatch: 'full', 
    component: CalendarPageComponent
  }
];
