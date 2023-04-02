import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hexa-current-time',
  templateUrl: './current-time.component.html',
  styleUrls: ['./current-time.component.scss']
})
export class CurrentTimeComponent implements OnInit {

  currentDate!: Date;
  errorMessage!: string;
  private dt!: number;
  @Input() cityname!: string;

  async ngOnInit() {
    if (!this.cityname || this.cityname === '') {
      this.currentDate = new Date();
      setInterval(() => {
        this.currentDate = new Date();
      }, 1000);
    } else {
      await this._getTimeFromLocation();
      if (!this.dt) {
        return;
      }
      this.currentDate = new Date(this.dt);
      setInterval(() => {
        this.dt += 1000;
        this.currentDate = new Date(this.dt);
      } , 1000);
    }
  }

  private async _getTimeFromLocation() {
    if (!this.cityname || this.cityname === '') {
      this.errorMessage = 'City name not provided';
      return;
    }
    const data = await import('city-timezones')
      .then((m) => {
        const res = m.lookupViaCity(this.cityname).shift();
        return res;
      })
      .catch((err) => {
        this.errorMessage = err.message;
      });
    if (!data) {
      this.errorMessage = 'City not available';
      return;
    }
    const timeZone = data?.timezone;
    const time = new Date().toLocaleString('en-US', {timeZone});
    this.dt = new Date(time).getTime();
  }
}