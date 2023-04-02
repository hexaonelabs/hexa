import { Inject, Injectable } from "@angular/core";
import { IDatastoreService, ILoadingService } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { FullCalendarComponent } from "@fullcalendar/angular";
import { DateSpanApi, EventClickArg, EventDropArg, EventInput, EventMountArg, EventSourceInput } from '@fullcalendar/core';
import { EventImpl } from "@fullcalendar/core/internal";
import { EventResizeDoneArg } from "@fullcalendar/interaction";
import { AlertController, AlertOptions, ModalController } from "@ionic/angular";
import { BehaviorSubject, Observable } from "rxjs";
import { v4 as uuidv4 } from 'uuid';
import { AppointmentModalComponent } from "./components/appointment-modal/appointment-modal.component";

const lightenDarkenColor = (col: string,  amt:number) => {
  let usePound = false;
  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }
  const num = parseInt(col,16);
  // get R
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if  (r < 0) r = 0;
  // get B
  let b = ((num >> 8) & 0x00FF) + amt;
  if (b > 255) b = 255;
  else if  (b < 0) b = 0;
  // get G
  let g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;
  else if (g < 0) g = 0;
  // return lighter RGB
  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}

const ROOT_DB_COLLECTION = 'd-calendar';

@Injectable()
export class FullCalendarService {

  private readonly _uiConfig$ = new BehaviorSubject<{initialView: string;}>( null as any);
  public readonly uiConfig$ = this._uiConfig$.asObservable();
  private readonly _loadedEventDataParts$ = new BehaviorSubject<string[]>([]);
  public readonly loadedEventDataParts$ = this._loadedEventDataParts$.asObservable();
  private readonly _calendarsData$: BehaviorSubject<any[]> = new BehaviorSubject([] as any);
  public readonly calendarsData$: Observable<any[]> = this._calendarsData$.asObservable();
  private readonly _fullCalendarComp$: BehaviorSubject<FullCalendarComponent> = new BehaviorSubject(null as any);
  public readonly fullCalendarComp$: Observable<FullCalendarComponent> = this._fullCalendarComp$.asObservable();
  private readonly _initalized$: BehaviorSubject<boolean> = new BehaviorSubject(false as any);
  public readonly initalized$: Observable<boolean> = this._initalized$.asObservable();
  private readonly _viewTitle$: BehaviorSubject<string> = new BehaviorSubject(undefined as any);
  public readonly viewTitle$ = this._viewTitle$.asObservable();

  constructor(
    private readonly _modalCtrl: ModalController,
    private readonly _confirmCtrl: AlertController,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) private readonly _loaderService: ILoadingService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_DATASTORE_SERVICE)) private readonly _datastoreService: IDatastoreService
  ) {}

  /**
   * Will return the FullCalendar API or throw an error if not found
   * @returns 
   */
  calendarAPI() {
    const calendarApi = this._fullCalendarComp$.value?.getApi();
    if (!calendarApi) throw new Error('Calendar API not found');
    return calendarApi;
  }

  /**
   * Load UI Config from Database 
   * and set reactive `_uiConfig$` property with data loaded.
   * @returns 
   */
  async loadUIConfigFromDatabase() {
    const {uiConfig } = await this._datastoreService.getData(
      ROOT_DB_COLLECTION, // collection
      ['uiConfig'], // key
      { uiConfig: {
        initialView: 'timeGridWeek',
      } } // default value to save if not exist (optional)
    );
    this._uiConfig$.next(uiConfig);
    return uiConfig;
  }

  /**
   * Load All Calendars from Database
   * and set reactive `_calendarsConfig` property with data loaded.
   * If no data is found, the function will create a default calendar and save it to database.
   */
  async loadCalendarsFromDatabase() {
    const defaultCalendar = {
      _id: uuidv4(), 
      name: 'delault',
      className: 'ceramic-event',
      durationEditable: true,
      editable: true,
      isVisible: true,
      color: 'var(--ion-color-primary)'
    };
    const {calendars = []} = await this._datastoreService.getData(
      ROOT_DB_COLLECTION, // collection
      ['calendars'], // key
      { calendars: [defaultCalendar] } // default value to save if not exist (optional)
    );
    this._calendarsData$.next(calendars);
    return calendars;
  }

  /**
   * Will init Component UI by triggering `render` method
   * and load events of each `calendars`
   * @param calendarComponent 
   * @param calendarsData 
   */
  async initService(calendarComponent: FullCalendarComponent, calendarsData: any[]) {
    this._loaderService.setStatus(true);
    this._fullCalendarComp$.next(calendarComponent);
    this._initalized$.next(true);
    await new Promise((resolve) => {
      setTimeout(() => {
        calendarComponent.getApi().render();
        resolve(true);
      }, 250);  
    });
    const loadingEventsPromises = []
    // check if one calendar have `className` with value `ceramic-event`
    const loadCeramicEvents = calendarsData.some(
      (calendar: {className: string}) => calendar.className === 'ceramic-event'
    );
    // load ceramic events from current view start to end
    if (loadCeramicEvents) { 
      // get events from database
      // push promise to array
      loadingEventsPromises.push(this.loadEventFromViewStartEnd());
    }
    // get calendars have `className` with value `google-event`
    const loadGoogleEvents = calendarsData.filter(
      (calendar: {className: string}) => calendar.className === 'google-event'
    );
    // load google events
    if (loadGoogleEvents.length > 0) {
      loadGoogleEvents.forEach(async (googleCalendar: any) => {
        // push promise to array
        loadingEventsPromises.push(
          // get events from Google Calendar
          new Promise((resolve, reject)=> {
            this.setEventSource({
              ...googleCalendar,
              className: 'google-event',
              durationEditable: false,
              editable: false,
              success: (googleEvent) => {
                resolve(googleEvent);
              },
              failure: (e) => reject('[ERROR] Load Google Calendar Events: ' + e.message),
            });

          })
        );
      });
    }
    // wait all promises
    await Promise.all(loadingEventsPromises);
    // hide loader
    this._loaderService.setStatus(false);
  }

  /**
   * Wrapper to load events from database for each month between current start and end date
   * base on current Calendar Component UI view
   * @returns 
   */
  async loadEventFromViewStartEnd() {
    const startDate = this.calendarAPI()?.view?.currentStart;
    const endDate = this.calendarAPI()?.view?.currentEnd;
    if (!startDate || !endDate) return;
    // load data evnts for each month bwtween current start and end date incuding current month
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth() + 1;
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth() + 1;
    const months = [];
    for (let i = startMonth; i <= endMonth; i++) {
      months.push(`${startYear}/${i}`);
    }
    const events = await Promise
      .all(months.map(key => this._getEventsFromDatabase(key)))
      .then((result) => {
        // return flated array
        return result.reduce((acc, cur) => cur && acc ? acc.concat(cur) : [], []);
      })
      // add `id`for fullcalendar methood utility
      .then(datas => datas?.map((data: any) =>  ({...data, id: data._id})));
    // Set events to calendar UI and return promise
    return await new Promise((resolve, reject)=> this.setEventSource({
      events,
      className: 'ceramic-event',
      id: 'ceramic-event', 
      success: () => {
        resolve('[INFO] load events success');
      },
      failure: (err) => {
        reject(err.message);
      }
    }));
  }

  /**
   * Will add Events Sources data to FullCalendar API.
   * @param source 
   * @returns 
   */
  async setEventSource(source: EventSourceInput = []) {
    const calendarApi = this._fullCalendarComp$.value.getApi();
    if (!calendarApi) return;    
    calendarApi.addEventSource(source);
  }

  /**
   * Will prompt user to create a new calendar
   * then update the state and database
   * before return created calendar
   * @returns newCalendar
   */
  async createNewCalendar() {
    const ionAlertCreate = await this._confirmCtrl.create({
      header: 'Create New Calendar',
      message: 'Fill in the form below to create a new calendar',
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Create', role: 'ok' }
      ],
      inputs: [
        { name: 'name', type: 'text', placeholder: 'Calendar Name ' },
        { name: 'googleCalendarApiKey', type: 'text', placeholder: 'Google API Key (optional)' },
        { name: 'googleCalendarId', type: 'text', placeholder: 'Google Calendar ID (optional)' }
      ],
    });
    ionAlertCreate.present();
    // extract inputs form values
    const { role, data: {values = {}} } = await ionAlertCreate.onDidDismiss();
    if (role !== 'ok') {
      return;
    }
    // add unique id to calendar
    values._id = uuidv4();
    // remove empty values and empty string values
    const valuesFiltered: any = Object.entries(values).reduce((acc, [key, value]) => {
      if (!value) return acc;
      if (value === '') return acc;
      return {...acc, [key]: value};
    }, {});
    const newCalendar = {
      color: 'var(--ion-color-primary)',
      ...valuesFiltered, 
      className: (!valuesFiltered.googleCalendarId) ? 'ceramic-event' : 'google-event',
      durationEditable: (!valuesFiltered.googleCalendarId) ? true : false,
      editable: (!valuesFiltered.googleCalendarId) ? true : false,
      isVisible: true,
    };
    const calendars = [...this._calendarsData$.value, newCalendar];
    // update state
    this._calendarsData$.next(calendars);
    // save to database
    await this._datastoreService.saveData({
      calendars
    }, ROOT_DB_COLLECTION, ['calendars']);
    // Load Google Calendar Events if is a Google Calendar
    if (newCalendar.googleCalendarId) {
      await new Promise((resolve, reject)=> {
        this.setEventSource({
          ...newCalendar,
          className: 'google-event',
          durationEditable: false,
          editable: false,
          success: (googleEvent) => {
            resolve(googleEvent);
          },
          failure: (e) => reject('[ERROR] Load Google Calendar Events: ' + e.message),
        });

      })
    }
    return newCalendar;
  }

  /**
   * Will delete a calendar from state and database
   */
  async deleteCalendar(calendar: any) {
    const calendarsData = this._calendarsData$.value;
    const index = calendarsData.findIndex(element => element._id === calendar._id);
    calendarsData.splice(index, 1);
    // update state
    this._calendarsData$.next(calendarsData);
    // save to database
    await this._datastoreService.saveData({
      calendars: calendarsData
    }, ROOT_DB_COLLECTION, ['calendars']);
  }

  /**
   * Will update data object of a calendar before update state
   * and save to database
   * @param calendar 
   */
  async updateCalendar(calendar: any) {
    // update application state 
    const calendarsData = this._calendarsData$.value;
    const index = calendarsData.findIndex(element => element._id === calendar._id);
    // update object data
    calendarsData[index] = {...calendarsData[index], ...calendar};
    // update state before database to avoid UI lag or loading
    this._calendarsData$.next(calendarsData);  
    // save to database
    await this._datastoreService.saveData({
      calendars: calendarsData
    }, ROOT_DB_COLLECTION, ['calendars']);
    // update event colors
    const events = this.calendarAPI()?.getEvents();
    events.forEach(event => {
      if (event.extendedProps?.['calendarIds']?.includes(calendar._id)) {
        event.setProp('backgroundColor', lightenDarkenColor(calendar.color, 30));
        event.setProp('borderColor', lightenDarkenColor(calendar.color, -30));
      }
    });  
  }
  
  async handleEventsSet() {
    const calendarApi = this._fullCalendarComp$.value?.getApi();
    if (!calendarApi) return;
    const data = calendarApi.getCurrentData();    
    this._viewTitle$.next(data.viewApi.title);
  }

  /**
   * Will be called when an event is mounted on the UI
   * It responsible for checking if the event is visible
   * and hide it if not
   * It also responsible for adding correct color to the event
   * based on the calendar color.
   * @param arg 
   */
  async handleEventDidMount(arg: EventMountArg) {
    const isVisible = this._isEventVisible(arg.event);
    // console.log('check if visible: ', isVisible, this._calendarsData$.value, arg  );
    if (arg?.el?.style?.display) {
      if (!isVisible ) {
        arg.el.style.display = 'none';
      } else {
        arg.el.style.display = 'block';
      }
    }
    //  get event calendar Ids
    let calendarIds = arg.event.extendedProps['calendarIds'];
    if (!calendarIds) {
      //  if have default cal use it or use first calendar
      const defaultCal = this._calendarsData$.value.find(
        (calendar: any) => calendar.default
      );
      calendarIds = [defaultCal?._id || this._calendarsData$?.value[0]?._id];
    }   
    if (calendarIds.length >= 1) {
      // set event color
      this._setEventColor(arg.el.style, calendarIds);
    }
  }

  private _extractProp(extendedProps: any) {
    const props: any = {};
    for (const key in extendedProps) {
        const element = extendedProps[key];
        props[key] = element;
    }
    return props;
  }

  /**
   * Will be called when user `drop`, `resize` or `click` an event
   * This will open a modal to edit the event
   * and trigger corresponding action based on user action (update/delete)
   * @param arg 
   * @param editModeEnabled 
   * @returns 
   */
  async handleEvent(arg: EventDropArg|EventResizeDoneArg|EventClickArg, editModeEnabled: boolean = true) {    
    const {event: eventApi, el} = arg;
    const {extendedProps = {}} = eventApi;
    const props = this._extractProp(extendedProps);    
    const schedule = {
      ...props,
      start: eventApi.start,
      end: eventApi.end,
      title: eventApi.title,
      allDay: eventApi.allDay,
      url: eventApi.url,
    };
    // run default logic to open modal
    const {
      _context = null, 
      _def = null, 
      _instance = null,
      role,
      jsEvent,
      view, 
      ...response} = await this._openModal(schedule, editModeEnabled) || {};
    // handle close modal without action
    if (role === 'cancel'|| role === 'backdrop' || !role) {
      if ((arg as any)?.revert) {
        (arg as any).revert();
      }
      return
    };
    // display loader
    this._loaderService.setStatus(true);
    // handle update type event
    switch (true) {
      case role === 'delete': {
        const year = schedule.start.getFullYear();
        const month = schedule.start.getMonth() + 1;
        // delete from database
        await this._deleteObject([`${year}/${month}`], schedule._id);
        // delete from ui
        eventApi.remove();
        break;
      } 
      case role === 'update':{
        // save event to database
        const eventUpdated = await this._saveEvent({...response});
        const calendarApi = this.calendarAPI();
        // check if event exist
        const e = calendarApi.getEventById(schedule._id);
        if (!e) break;
        // e.remove();
        // calendarApi.addEvent(eventUpdated);
        // console.log('>>>', e); 
        for (const iterator in eventUpdated) {
            // console.log(iterator);
            if (!eventUpdated[iterator])
              continue;
            if (iterator === 'title') {
              e.setProp('title', eventUpdated[iterator]);
              continue;
            }
            if (iterator === 'start') {
              e.setStart(eventUpdated[iterator] as any);
              continue;
            }
            if (iterator === 'end') {
              e.setEnd(eventUpdated[iterator] as any);
              continue;
            }
            if (iterator === 'allDay') {
              e.setAllDay(eventUpdated[iterator] as any);
              continue;
            }
            e.setExtendedProp(iterator, eventUpdated[iterator]);
            // e.setProp(iterator, eventUpdated[iterator]);
        }
        break;
      }
      default:
        break;
    }
    this._loaderService.setStatus(false);
  }

  /**
   * Will be called when a date range is selected on the CalendarComponent UI 
   * and will create a new event in the database and update the UI
   * @param arg 
   * @returns 
   */
  async handleDateSelect(arg: DateSpanApi) {
    console.log('handleDateSelect', arg);
    this._loaderService.setStatus(true);
    // save event to database 
    const event = await this._saveEvent({
      title: 'new Event',
      ...arg
    });
    // add `id`for fullcalendar methood utility
    event.id = event._id;
    // update calendar ui
    this.calendarAPI().addEvent(event);
    this._loaderService.setStatus(false);
  }

  async updateCalendarsVisibility(calendar: {isVisible: boolean, _id: string}) {
    const calendarApi = this._fullCalendarComp$.value.getApi();
    if (!calendarApi) return;
    // upadate calendar config
    const calendarsConfig = this._calendarsData$.value;
    const index = calendarsConfig.findIndex(c => c._id === calendar._id);
    calendarsConfig[index].isVisible = calendar.isVisible;
    // update aplication state 
    this._calendarsData$.next(calendarsConfig);
    // update calendar ui
    const eventsApi = calendarApi.getEvents();
    eventsApi.forEach((event: EventImpl) => {
      const isVisible = this._isEventVisible(event);
      if (isVisible) {
        event.setProp( 'display', 'auto' );        
      } else {
        event.setProp( 'display', 'none' );
      }
    });
    // update database value
    await this._datastoreService.saveData(
      {calendars: this._calendarsData$.value},
      ROOT_DB_COLLECTION,
      ['calendars']
    );
  }

  /**
   * Will load `events` from database base on `key`
   * @param key like `${year}/${month}`
   * @returns 
   */
  private async _getEventsFromDatabase(key?: string) {
    if (!key) {
      // use current month to define key
      const calendarApi = this._fullCalendarComp$.value.getApi();
      if (!calendarApi) return;
      const date = calendarApi.getDate();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      key = `${year}/${month}`;
    }  
    // get events from database
    const {events = []} = await this._datastoreService.getData(
      ROOT_DB_COLLECTION,
      [key],
      {
        events: []
      }
    );
    // update loaded event data part state
    this._loadedEventDataParts$.next([
      ...this._loadedEventDataParts$.value,
      key
    ]);
    // return result
    return events;    
  }

  private async _openModal<T>(arg: T, editModeEnabled = true) {
    const calendars = await this._calendarsData$.value;
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

  private async _openConfirm(ops: AlertOptions) {
    const alert = await this._confirmCtrl.create(ops);
    alert.present();
    const { role } = await alert.onDidDismiss();
    return role;
  }

  /**
   * Method to load specific data part from database based on `date` and `type`
   * This method will be called when calendar view change and will load more data
   * to prevent loading all data at once on calendar init
   * and 
   * @param date 
   * @param type 
   */
  async loadEventsPart(date: Date, type: 'fullMonth'|'fullDay'|'fullYear' = 'fullMonth') {
    // get key like `${year}/${month}`;
    const key = `${date?.getFullYear()}/${(date?.getMonth()||0)+1}`;
    const loadedDataParts = this._loadedEventDataParts$.value;
    // prevent reload existing part
    if (loadedDataParts.includes(key)) {
      return;
    }
    // load more data part base on key
    const eventsParts = await this._getEventsFromDatabase(key);
    console.log(`[INFO] load events part: ${key}`, eventsParts);
    // get ceramic-event source object
    const eventSource = this.calendarAPI()?.getEventSourceById('ceramic-event');
    // add events to calendar
    if (eventsParts && eventSource) {
      await new Promise((resolve, reject)=> {
        this.calendarAPI()?.addEventSource({
          events: eventsParts,
          className: 'ceramic-event',
          id: 'ceramic-event',
          success: () => {
            resolve('[INFO] add events part success');
          },
          failure: (err) => reject(err.message)
        });
      });
    }
  }

  /**
   * Method to save event to database.
   * Work with new or existing event
   * Events are saved in database based on `year/month` key inside an object with `events` key array.
   * The final structure will be like:
   * ```
   * {
   *    events: [
   *     ...schedule
   *   ]
   * }
   * ```
   * 
   * @param schedule 
   * @returns 
   */
  private async _saveEvent(schedule: any) {
    // create ID if is a new schedule
    if (!schedule._id) {
      schedule._id = uuidv4();
    }
    // generate key from Date
    const year = schedule.start.getFullYear();
    const month = schedule.start.getMonth() + 1;
    const key =  [`${year}/${month}`];
    // load existing events from database to merge with new event
    const {events = []} = await this._datastoreService.getData(
      ROOT_DB_COLLECTION, key, { events: [] }
    );
    // update database events
    await this._datastoreService.saveData(
      { events: [ ...events.filter(
        (e: EventInput & {_id: string}) => e._id !== schedule._id
      ), schedule ] },
      ROOT_DB_COLLECTION,
      key
    );
    // return event with _id
    const event: EventInput & {_id: string} = {
      ...schedule,
      title: schedule.title||'new Event',
      allDay: schedule.allDay||false
    };
    return event; 
  }

  /**
   * Method to delete event from database
   * @param id 
   */
  private async _deleteObject(key: string[], scheduleId: string) {
    console.log('_deleteObject', key);
    // load existing events from database to merge with new event
    const { events } = await this._datastoreService.getData(
      ROOT_DB_COLLECTION, key, { events: [] } 
    );
    // filter events to remove deleted one
    const filtredEvents = events.filter((e: EventInput & {_id: string}) => e._id !== scheduleId);
    // update database events 
    await this._datastoreService.saveData(
      { events: filtredEvents },
      ROOT_DB_COLLECTION,
      key
    );
  }

  /**
   * Method to style event based on calendar color
   * @param eventStyle 
   * @param calendarIds 
   * @param defaultColor 
   */
  private _setEventColor(eventStyle: CSSStyleDeclaration, calendarIds: string[], defaultColor?: 'var(--ion-color-primary)') {
    // find coresponding calendar to set event color    
    const calendar = this._calendarsData$.value.find(c => calendarIds.includes(c._id));
    const color = calendar?.color || defaultColor;
    // get rgb color  from hex
    const [r,g,b] = this._hexToRgb(color);
    const lum = (((0.299 * r) + ((0.587 * g) + (0.114 * b))));
    const textColor = lum > 156 ? 'black' : 'white';
    // set event color
    // TODO: check why color text is not working
    eventStyle.color = textColor;
    eventStyle.backgroundColor = lightenDarkenColor(color, 30); //.setProp('borderColor', 'red');
    eventStyle.borderLeftColor = lightenDarkenColor(color, -30); //.setProp('borderColor', 'red');
  }

  /**
   * Utils method to check if event is visible based on calendar visibility
   * @param event 
   * @returns 
   * TODO: refactor this method as a pipe
   */
  private _isEventVisible(event: any) {
    return this._calendarsData$.value.some(
    calendar => 
    event.extendedProps['calendarIds']
      // test for ceramic calendar
      ? (event?.extendedProps['calendarIds']?.includes?.(calendar._id)
        && calendar?.isVisible) 
      // test for Google Calendar
      : (event?.source?.internalEventSource?._raw['googleCalendarId'] === calendar?.googleCalendarId
        && calendar?.isVisible)
  );}

  private _hexToRgb(hex: string) {
    const bigint = parseInt(hex.replace('#', ''), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return [r, g, b];
  }
}