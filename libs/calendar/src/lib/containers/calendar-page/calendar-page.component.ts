import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventMountArg } from '@fullcalendar/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { getOptions } from '../../calendar.options';
import { FullCalendarService } from '../../fullcalendar.service';
import { AlertController, ModalController, PopoverController } from '@ionic/angular';
import { isAfter, isBefore, addWeeks, subWeeks } from 'date-fns';
import { AppointmentModalComponent } from '../../components/appointment-modal/appointment-modal.component';
import { ILoadingService } from '@hexa/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';

@Component({
  selector: 'hexa-calendar-page',
  templateUrl: './calendar-page.component.html',
  styles: [`
    :host {
      --fc-event-border-color: var(--ionic-color-primary-shade);
      --fc-event-bg-color: var(--ion-color-primary-tint);
      --fc-today-bg-color: rgba(var(--ion-color-primary-rgb), 0.05);
     
      ion-toolbar {
        --background:transparent;

        h1 {
          display: inline;
        }
      }

      ion-toolbar {
        ion-avatar {
            height: 32px;
            width: 32px;
            border: 1px solid var(--ion-color-light);
            border-radius: 50%;
            overflow: hidden;
        }
      }
      full-calendar, div {
        border-radius: 1.1rem;
        overflow: hidden;
        border: 1px solid rgba(var(--ion-color-primary-rgb), 0.15);
        background: #fff;
      }
    
    }

    
  `]
})
export class CalendarPageComponent implements AfterViewInit {
  @ViewChild('calendarCmp', {static: false}) readonly calendarCmp!: FullCalendarComponent;
  title = 'Calendar Page ';
  calendarsData$ = this._fullCalendarService.calendarsData$;
  uiConfig$ = this._fullCalendarService.uiConfig$;
  currentView = 'timeGridWeek';
  isVisible$: Observable<boolean> = this._fullCalendarService.initalized$;
  viewTitle$: Observable<string> = this._fullCalendarService.viewTitle$;
  fullCalendarOptions: CalendarOptions = {
    ...getOptions({
      initialView: this.currentView,
    }),
    eventDrop: async (e) => await this._fullCalendarService.handleEvent(e),
    eventResize: async (e) => await this._fullCalendarService.handleEvent(e),
    eventClick: async (e) => {   
      e.jsEvent.preventDefault();
      const editModeEnabled = false;
      await this._fullCalendarService.handleEvent(e, editModeEnabled);
    },
    eventsSet: async () => await this._fullCalendarService.handleEventsSet(),
    select: async (e) => {
      const { role, jsEvent,  ...data} = await this._openModal(e);
      if (!data) return;
      if (role === 'cancel'|| role === 'backdrop' || !role) return;
      await this._fullCalendarService.handleDateSelect(data);
    },
    eventDidMount: async (e: EventMountArg) => await this._fullCalendarService.handleEventDidMount(e),
    businessHours: [{
      // days of week. an array of zero-based day of week integers (0=Sunday)
      daysOfWeek: [ 1, 2, 3, 4 ], // Monday - Thursday
      startTime: '10:00', // a start time (10am in this example)
      endTime: '18:00', // an end time (6pm in this example)
    }],
    
  };

  constructor(

    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) private readonly _loaderService: ILoadingService,
    private readonly _fullCalendarService: FullCalendarService,
    private readonly _modalCtrl: ModalController,
    private readonly _alertService: AlertController,
    private readonly _popoverService: PopoverController
  ) {}

  async ionViewWillEnter() {
    await this._fullCalendarService.loadUIConfigFromDatabase();
  }

  async ngAfterViewInit() {
    // get calendar from database
    const calendars = await this._fullCalendarService.loadCalendarsFromDatabase();
    // init calendar component using service
    await this._fullCalendarService.initService(this.calendarCmp, calendars);
    this._fullCalendarService.calendarAPI()
  }

  async actions(type: string, payload?: any) {
    switch (true) {
      case type === 'select-date': {
        const {detail: {value}} = payload;
        this._fullCalendarService.calendarAPI().gotoDate(new Date(value));
        break;
      }
      case type === 'updateCalendarName': {
        const {calendar, name} = payload;
        this._loaderService.setStatus(true);
        await this._fullCalendarService.updateCalendar({...calendar, name});
        this._loaderService.setStatus(false);
        break;
      }
      case type === 'openColorPicker': {
        const {colorPicker, target} = payload;
        colorPicker?.click();
        break;
      }
      case type === 'deleteCalendar': {
        const {calendar} = payload;
        this._confirmBefore(
          `You are about to delete this calendar. 
          This action cannot be undone and you will lose all events associated with this calendar. 
          Are you sure you want to continue?`, 
          async () => {
            this._loaderService.setStatus(true);
            await this._fullCalendarService.deleteCalendar(calendar);
            this._loaderService.setStatus(false);
          }
        )
        break;
      }
      // case type === 'disconnect':{
      //   const confirm = await this._confirm({
      //     header: 'Disconnect',
      //     message: 'Are you sure you want to disconnect?',
      //   }); 
      //   if (confirm) {
      //     this._loaderService.setStatus(true);
      //     await this._disconnect();
      //     this._loaderService.setStatus(false);
      //   }
      //   break;
      // }
      case type === 'setCalendarColor': {
        const {calendar, color} = payload;
        this._loaderService.setStatus(true);
        await this._fullCalendarService.updateCalendar({...calendar, color});
        this._loaderService.setStatus(false);
        break;
      }
      case type === 'toggleCalendarVisibility': {
        payload.isVisible = !payload.isVisible;
        this._loaderService.setStatus(true);
        await this._fullCalendarService.updateCalendarsVisibility(payload);
        this._loaderService.setStatus(false);
        break;
      }
      case type === 'newCalendar': {
        this._loaderService.setStatus(true);
        this._fullCalendarService.createNewCalendar();
        this._loaderService.setStatus(false);
        break;
      }
      case type === 'toggleWeekends':
        this.fullCalendarOptions.weekends = !this.fullCalendarOptions.weekends;
        break;
      case type === 'next':{
        this._fullCalendarService.calendarAPI()?.next();
        const endDate = this._fullCalendarService.calendarAPI()?.view.currentEnd;
        if (endDate) {
          // this._loaderService.setStatus(true);
          await this._fullCalendarService.loadEventsPart(endDate); 
          // this._loaderService.setStatus(false);
        }
        break;
      }
      case type === 'prev':{
        this._fullCalendarService.calendarAPI()?.prev();
        const startDate = this._fullCalendarService.calendarAPI()?.view.currentStart;
        if (startDate) {
          // this._loaderService.setStatus(true);
          await this._fullCalendarService.loadEventsPart(startDate); 
          // this._loaderService.setStatus(false);
        }
        break;
      }
      case type === 'today':
        this._fullCalendarService.calendarAPI()?.today();
        break;
      case type === 'view': {
        const {target: {value = undefined}= {}} = payload;      
        this.currentView = value;
        this._fullCalendarService.calendarAPI()?.changeView(value);
        break;
      }
    }
  }

  private async _openModal<T>(arg: T, editModeEnabled = true) {
    const calendars = await firstValueFrom(this.calendarsData$);
    const modal = await this._modalCtrl.create({
      component: AppointmentModalComponent,
      componentProps: {
        data: {...arg},
        editModeEnabled,
        calendars
      }
    });
    modal.present();
    const { data = undefined, role = 'cancel'} =  await modal.onDidDismiss();    
    return role !== 'cancel' ? {...data, role} : {role};
  }

  private async _confirmBefore<T>(message: string, cb: () => Promise<T>): Promise<T|void> {
    const ionAlert = await this._alertService.create({
      header: 'Confirm',
      message,
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Ok', role: 'ok' },
      ]
    });
    await ionAlert.present();
    const {role} = await ionAlert.onDidDismiss();
    if (role === 'ok') {
      // closing popover calendar options UI
      const popover = await this._popoverService.getTop();
      if (popover) {
        await popover.dismiss();
      }
      return await cb();
    }
  }
}