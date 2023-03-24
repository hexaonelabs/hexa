import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ToastController, ToastOptions } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { filter, map, merge, Observable, of, Subject } from 'rxjs';

@Component({
  selector: 'd-workspace-update',
  template: `<div *ngIf="updateAvailable$ | async"></div>`,
  styles: [``],
})
export class UpdateComponent {
  updateAvailable$: Observable<boolean>;
  closed$ = new Subject<void>();

  constructor(private updates: SwUpdate, private _toast: ToastController) {
    console.log('Application updater install: ', environment.production);
    this.updateAvailable$ = merge(
      of(false),
      this.updates.versionUpdates.pipe(
        filter((e) => e.type === 'VERSION_DETECTED'),
        map(async () => await this._displayNotif()),
        map(() => true)
      ),
      this.closed$.pipe(map(() => false))
    );
  }

  async activateUpdate() {
    if (!environment.production) {
      return;
    }
    await this.updates.activateUpdate();
    location.reload();
  }

  private async _displayNotif() {
    const duration = 1000 * 30; // 30 seconds 
    const data = <ToastOptions>{
      message: 'New version available!',
      position: 'bottom',
      showCloseButton: true,
      closeButtonText: `Update`,
      buttons: [
        { text: 'Update',role: 'ok' },
      ],
      duration // force toasts to close to trigger the update
    };
    const toast = await this._toast.create(data);
    await toast.present();
    await toast.onDidDismiss();
    this.activateUpdate();
  }
}
