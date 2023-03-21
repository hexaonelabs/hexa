import { ErrorHandler, Inject, Injectable, NgZone } from '@angular/core';
import { ILoadingService } from '@d-workspace/interfaces';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler {

  constructor(
    private readonly _alertService: AlertController,
    private _zone: NgZone,
    private readonly _loadingCtrl: LoadingController,
    @Inject('APP_LOADER_SERVICE') private readonly _loaderService: ILoadingService,
  ) { }

  async handleError(error: any) {
    let message = error.message || error;
    // get message error from Unkown Promise Error
    if (message.indexOf('Uncaught (in promise):') !== -1) {
      message = message.split('Uncaught (in promise):')[1].trim();
    }
    console.error('[ERROR] GlobalErrorHandler: ', error.message);
    // use `NgZone.run`, too update loader state even if the error is thrown outside the ngZone
    this._zone.run(async () =>  {
      this._loaderService.setStatus(false);
      // close existing loader UI ctrl 
      const existingLoader = await this._loadingCtrl.getTop();
      if (existingLoader) {
        await existingLoader.dismiss();
      }
      // close existing alert
      const existingAlert = await this._alertService.getTop();
      if (existingAlert) {
        await existingAlert.dismiss();
      }
      // show alert
      const appAlert = await this._alertService.create({
        header: 'Error',
        message,
        buttons: ['OK'],
        cssClass: 'app-alert danger',
      });
      await appAlert.present();
    });
  }
}