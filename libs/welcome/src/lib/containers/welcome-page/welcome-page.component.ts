import { Component, Inject, OnInit } from '@angular/core';
import { IDatastoreService, ILoadingService } from '@hexa/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import {
  AlertController,
  AlertInput,
  ModalController,
  PopoverController,
} from '@ionic/angular';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { DIDDataStore } from '@glazed/did-datastore';
import { IConfig } from '../../interfaces/config.interface';
import { IBackgroundConfig } from '../../interfaces/background-config.interface';

const ROOT_DB_COLLECTION = 'd-welcome';
const DEFAULT_WIDGETS_CONFIG: IConfig = {
  background: {
    url: undefined
  }
};
const WIDGETS_MESSAGE = {
  background: `You can provide a URL address of the image you want to use as a background.`,
};
const WIDGETS_INPUTS_OPTIONS = {
  background: (background: {
    // apiKey?: string;
    // query?: string;
    url?: string;
  }) => [
    // {
    //   name: 'unsplashClientId',
    //   type: 'text',
    //   placeholder: 'Unsplash Client ID',
    //   value: background?.unsplashClientId,
    // },
    // {
    //   name: 'query',
    //   type: 'text',
    //   placeholder: 'Unsplash query to search images',
    //   value: background?.query,
    // },
    {
      name: 'url',
      type: 'text',
      placeholder: 'Web URL address of the image',
      value: background?.url,
    },
  ],
};

@Component({
  selector: 'hexa-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss'],
})
export class WelcomePageComponent implements OnInit {
  text = 'Welcome';
  private readonly _config$: BehaviorSubject<IConfig> = new BehaviorSubject(
    null as any
  );
  public readonly config$ = this._config$
    .asObservable()
    .pipe(
      distinctUntilChanged(
        (prev, next) => JSON.stringify(prev) === JSON.stringify(next)
      )
    );
  constructor(
    private readonly _modal: ModalController,
    private readonly _alertCtrl: AlertController,
    private readonly _popoverCtrl: PopoverController,
    @Inject(getInjectionToken(TOKENS_NAME.APP_IS_PROD))
    public readonly isProd: boolean,
    @Inject(getInjectionToken(TOKENS_NAME.APP_DATASTORE_SERVICE))
    private readonly _datastoreService: IDatastoreService<DIDDataStore>,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE))
    private readonly _loaderService: ILoadingService
  ) {}

  async ngOnInit() {
    if (this._config$.value) {
      return;
    }
    // get config from db
    const { background } = await this._datastoreService.getData(
      ROOT_DB_COLLECTION,
      ['widgetsConfig'],
      DEFAULT_WIDGETS_CONFIG
    );
    // update app state
    this._config$.next({
      background,
    });
  }

  ionViewWillEnter() {
    this._sayHello();
  }

  async actions(type: string, payload?: any) {
    switch (true) {
      case type === 'open-settings-modal': {
        // close existing popover
        const popover = await this._popoverCtrl.getTop();
        if (popover) {
          await popover.dismiss();
        }
        // prompt settings modal
        const settings = await this._openAlertSettings(payload);
        // save settings to db
        if (settings) {
          this.actions('saveConfig', {
            [payload]: settings,
          });
        }
        break;
      }
      case type === 'saveConfig': {
        this._loaderService.setStatus(true);
        const data = {
          ...this._config$.value,
          ...payload,
        };
        // update app state
        this._config$.next(data);
        // save config to db
        await this._datastoreService.saveData(data, ROOT_DB_COLLECTION, [
          'widgetsConfig',
        ]);
        this._loaderService.setStatus(false);
        // TODO: display notification
        break;
      }
    }
  }

  private _sayHello(): void {
    const currentDate = new Date();
    switch (true) {
      case currentDate.getHours() < 5:
        this.text = 'Good night';
        break;
      case currentDate.getHours() < 12:
        this.text = 'Good morning';
        break;
      case currentDate.getHours() < 18:
        this.text = 'Good afternoon';
        break;
      case currentDate.getHours() < 24:
        this.text = 'Good evening';
        break;
      default:
        break;
    }
  }

  private async _openAlertSettings(widgetType: 'background') {
    const inputs = WIDGETS_INPUTS_OPTIONS[widgetType](
      this._config$.value[widgetType] as any
    ) as AlertInput[];
    if (!inputs) {
      return;
    }
    // create header title capitalized
    const header = `${widgetType[0].toUpperCase()}${widgetType.slice(
      1
    )} Settings`;
    const message = WIDGETS_MESSAGE[widgetType];
    const alert = await this._alertCtrl.create({
      header,
      message,
      inputs,
      buttons: [
        { text: 'Cancel', role: 'cancel', cssClass: 'secondary' },
        { text: 'Ok' },
      ],
    });
    await alert.present();
    const { data, role } = await alert.onDidDismiss();
    if (role === 'cancel' || role === 'backdrop') {
      return;
    }
    const { values = null } = data;
    return values;
  }
}
