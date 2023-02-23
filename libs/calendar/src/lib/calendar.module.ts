import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FullCalendarModule, FullCalendarComponent } from '@fullcalendar/angular'; // must go before plugins

import { calendarRoutes } from './lib.routes';
import { CalendarPageComponent } from './containers/calendar-page/calendar-page.component';
import { FullCalendarService } from './fullcalendar.service';
import { AppointmentModalComponent } from './components/appointment-modal/appointment-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import { ViewNamePipe } from './pipes/view-name.pipe';

@NgModule({
  declarations: [
    CalendarPageComponent,
    AppointmentModalComponent,
    ViewNamePipe
  ],
  imports: [
    IonicModule,
    CommonModule, 
    FullCalendarModule,
    ReactiveFormsModule,
    RouterModule.forChild(calendarRoutes),
    ColorPickerModule
  ],
  providers: [
    FullCalendarService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class CalendarModule {}
