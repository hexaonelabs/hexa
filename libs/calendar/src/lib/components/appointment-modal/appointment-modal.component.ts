import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { parseISO, getDate, getMonth, getYear } from 'date-fns';

@Component({
  selector: 'hexa-appointment-modal',
  templateUrl: './appointment-modal.component.html',
  styleUrls: ['./appointment-modal.component.scss'],
})
export class AppointmentModalComponent implements OnInit {
  private _calendars: any[] = [];
  @Input() data!: any;
  @Input() editModeEnabled?: boolean = false;
  @Input() set calendars(value: any[]) {
    this._calendars = value;
  }
  form!: FormGroup;
  get userCalendars()  {
    return this._calendars;
  }

  constructor(
    public readonly modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      _id: new FormControl(undefined),
      title: new FormControl(undefined, Validators.compose([
        Validators.required,
      ])),
      start: new FormControl(new Date(), Validators.compose([
        Validators.required,
      ])),
      end: new FormControl(undefined, Validators.compose([
        Validators.required,
      ])),
      calendarIds: new FormArray([], Validators.compose([
        Validators.required,
        Validators.minLength(1)
      ])),
      allDay: new FormControl(false),
      description: new FormControl(''),
    });
    const {start, end, ...data} = this.data;
    // patch data value to form
    this.form.patchValue({
      ...data,
      start: start ? new Date(start) : new Date(),
      end: end ? new Date(end) : new Date()
    });
    // patch calendarIds value to form
    data?.calendarIds?.forEach((cal: string) => {
      (this.form.get('calendarIds') as FormArray).push(new FormControl(cal));
    }); 
    // patch default calendar for create mode
    if (this.editModeEnabled && !this.data._id && this.userCalendars?.[0]?._id) {
      (this.form.get('calendarIds') as FormArray).push(new FormControl(this.userCalendars[0]._id));
    }  
  }

  actions(type: string, payload?: any) {
    switch (true) {
      case type === 'changeCalendar': {
        this._onCheckboxChange(payload);
        break;
      }
      case type === 'toggleAllDay': {
        const {detail: {checked}} = payload;
        if (checked) {
          // patch value with start and end with same day
          const start = this.form.get('start')?.value;
          const end = this.form.get('end')?.value;
          const startDate = start;
          const endDate = end;
          const startDay = getDate(startDate);
          const endDay = getDate(endDate);
          const startMonth = getMonth(startDate) + 1;
          const endMonth = getMonth(endDate) + 1;
          const startYear = getYear(startDate);
          const endYear = getYear(endDate);
          console.log('>>', startDay === endDay);
          
          if (startDay === endDay) {
            this.form.patchValue({
              start: this.formatDate(`${startYear}-${startMonth < 10 ? `0${startMonth}` : startMonth }-${startDay}`),
              end: this.formatDate(`${startYear}-${startMonth < 10 ? `0${startMonth}` : startMonth }-${startDay+1}`)
            });
          }
        }
        console.log('toggleAllDay', checked);
        
        break;
      }
      case type === 'cancelDateTime': {
        const el = payload.el.closest('ion-popover')||payload.el.closest('ion-modal');
        el.dismiss();
        break;
      }
      case type === 'confirmDateTime':{
        const popover = payload.el.closest('ion-popover')||payload.el.closest('ion-modal');
        console.log('confirmDateTime', payload);
        // confirm date time
        payload.confirm();
        // close popover
        if (popover) popover.dismiss();        
        break;
      }case type === 'close':
      case type === 'cancel':
        this.modalCtrl.dismiss(undefined, 'cancel');
        break;
      case type === 'save':
      case type === 'update':
        this.modalCtrl.dismiss({
          ...this.data, 
          ...this.form.value
        },type);
        break;
      case type === 'delete':        
        this.modalCtrl.dismiss({
          _id: this.form.value._id
        }, 'delete');
    }
  }

  formatDate(value: any) {
    return parseISO(value);
  }

  private async _onCheckboxChange(e: any) {
    const checkArray: FormArray = this.form.get('calendarIds') as FormArray;
    // clear checkbox Array
    checkArray.clear();
    // add new values
    const value = e.target.value;
    if (Array.isArray(value)) {
      value.forEach((element: string) => {
        checkArray.push(new FormControl(element));
      });
    } else {
      checkArray.push(new FormControl(value));
    }
  }

}