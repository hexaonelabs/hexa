import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuthService, INotificationService, IPromptStrategyService } from '@hexa/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import { AlertController, IonPopover, IonToggle, LoadingController, ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { BehaviorSubject, firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'hexa-dashboard',
  templateUrl: `./dashboard.component.html`,
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // public routerUrl$: Observable<string>;
  public isDarkMode$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public version = (environment.production ? '' : '[DEV]') + `${environment.version}`;
  public features = [
    // {name: 'home', url: 'dashboard', sort: 0, isEnabled: false, isVisible: false},
    {name: 'folder-open', url: 'drive', sort: 5, isEnabled: true, isVisible: true},
    {name: 'wallet-sharp', url: 'wallet', sort: 10, isEnabled: true, isVisible: true},
    {name: 'calendar-number', url: 'calendar', sort: 20, isEnabled: true, isVisible: false},
    {name: 'clipboard', url: 'notes', sort: 25, isEnabled: true, isVisible: false},
    {name: 'chatbubbles', url: 'chat', sort: 30, isEnabled: false, isVisible: false},
    {name: 'checkbox', url: 'todos', sort: 40, isEnabled: false, isVisible: false},
    // {name: 'add', url: 'add', sort: 100, isEnabled: false, isVisible: true},
  ]
  .sort((a,b) => a.sort - b.sort)
  .filter(f => f.isVisible);
  public readonly isNotifEnabled$ = this._notificationService.isConnected$;
  public readonly account$ = this._authService.account$;
  private readonly _subs: Subscription[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _toastService: ToastController,
    @Inject(DOCUMENT) private readonly _document: Document,
    @Inject(getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)) private readonly _authService: IAuthService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_NOTIFICATION_SERVICE)) private readonly _notificationService: INotificationService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_PROMPT_STRATEGY_SERVICE)) private readonly _promptStrategy: IPromptStrategyService,
    ) {}

  ngOnInit() {
    this._checkDarkModeSetting();
    const sub = this._notificationService.notifications$.subscribe(
      async (messages) => {
        if (messages.length === 1) {
          await this.displayNotification(messages[0]);
        } else if (messages.length > 1) {
          const content = `You have ${messages.length} new notifications`;
          await this.displayNotification(content);
        }
      }
    );
    this._subs.push(sub);
    const { params: {id: _id = null} = {}} = this._route.snapshot.parent||{};
    // this.routerUrl$ = this._router.events.pipe(
    //   // filter only navigation end events
    //   filter((event) => event instanceof NavigationEnd),
    //   map((event: NavigationEnd) => {
    //     return event?.url;
    //   }),
    //   filter(url => !!url),
    //   // trick to manage first navigation enter on MainPage from other module
    //   // Force with default pannel url to prevent incorrect display color for active link 
    //   map(url =>  (url.match(/\//g)||'').length > 2 ? url : url + '/settings'),
    // );
  }

  ngOnDestroy(): void {
    this._subs.forEach((sub) => sub.unsubscribe());
  }

  togglePage(path: string) {    
    const {id: streamId} = this._route.snapshot.params;
    this._router.navigate([`/h/${path}`])
  }

  async toogleNotification(popoverElement: IonPopover, toggleElement: IonToggle) {
    // disable element to prevent multiple click
    toggleElement.disabled = true;
    let message = '';
    const isConnected = await firstValueFrom(this._notificationService.isConnected$);
    if (isConnected) {
      await this._notificationService.disconnect();
      message = `Notifications are disabled`; 
    } else {
      message = await this._notificationService
      .connect()
      .then(() => `Notifications are  enabled`)
      .catch(() =>  'Failed to enable notifications');
    }
    // do not miss to enable element back
    await popoverElement.dismiss();
    await this.displayNotification(message);
    toggleElement.disabled = false;
  }

  async displayNotification(message: string) {
    const ionToast = await this._toastService.create({
      message,
      duration: 5000,
      cssClass: 'notification-toast',
      icon: 'information-circle-outline',
      position: 'top',
      buttons: [
        {
          text: 'ok',
          role: 'cancel',
        },
      ],
    });
    await ionToast.present();
  }

  async setupIPFSPinService(popoverElement: IonPopover) {
    // close popover
    popoverElement.dismiss();
    // extract user data
    const userData = this._authService.profile$.value;
    // check existing config for pining servcie and reset value if needed
    const config = await this._promptStrategy.askSetupService({
      token: userData?.ipfsConfig?.token,
      serviceName: userData?.ipfsConfig?.serviceName
    });
    if (config?.token === '' ) {
      config.serviceName = '';
    }
    if (!config) {
      return;
    }
    // save user config to user base
    try {
      await this._authService.updateProfilData({
        ...userData,
        ipfsConfig: {
          ...config
        }
      });
    } catch (error) {
      throw new Error('Failed to save IPFS pinning service configuration');
    }
    // display toast confirmation
    const confirmationMessage = 'IPFS pinning service configured';
    const ionToast = await this._toastService.create({
      message: confirmationMessage,
      color: 'success',
      duration: 2000,
    });
    await ionToast.present();
  }

  async disconnect() {
    await this._authService.disconnect();
  }

  async toggleDarkMode($event: any) {
    // toggle dark mode class
    this._document.body.classList.toggle('dark');
    // get current dark mode value and save it to local storage
    const isDarkmode = this._document.body.classList.contains('dark');
    this._document.defaultView?.localStorage.setItem('hexa:darkMode', isDarkmode.toString());
    // update dark mode value
    this.isDarkMode$.next(isDarkmode);
  }

  copyAccountAddressToClipboard() {
    const account = this._authService.account$.value;
    if (account) {
      navigator.clipboard.writeText(account);
      // display toast
      this._toastService.create({
        message: 'Account address copied to clipboard',
        duration: 2000,
        color: 'success',
        position: 'bottom',
      }).then((toast) => toast.present());
    }
  }

  private _checkDarkModeSetting() {
    const isSettingSaved = this._document.defaultView?.localStorage.getItem('hexa:darkMode');
    if (!isSettingSaved) {
      this.isDarkMode$.next(this._document.body.classList.contains('dark'));
      return;
    } 
    if (isSettingSaved === 'true') {
      this._document.body.classList.add('dark');
      this.isDarkMode$.next(true);
    } else {
      this._document.body.classList.remove('dark');
      this.isDarkMode$.next(false);
    }
  }
}
