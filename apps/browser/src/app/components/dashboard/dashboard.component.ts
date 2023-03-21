import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { INotificationService } from '@d-workspace/interfaces';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { firstValueFrom, Subscription } from 'rxjs';

@Component({
  selector: 'd-workspace-dashboard',
  template: `
    <ion-split-pane contentId="main" when="sm" >
    <ion-menu contentId="main" #menuElement>
      <ion-header class="ion-no-border">
        <ion-toolbar>
          <ion-img class="logo" src="./assets/images/logo.svg"></ion-img>
        </ion-toolbar>
      </ion-header>
      <ion-content [fullscreen]="true" color="primary">
        <div class="centervert">
          <ion-button 
              fill="clear"
              expand="block"
              size="large"
              class="link"
              *ngFor="let feature of features; let i = index"
              [disabled]="!feature.isEnabled"
              (click)="togglePage(feature.url);menuElement.close()"
              [ngClass]="{'active-link': i === 0}"
              routerLinkActive="active-link">
            <ion-icon slot="icon-only" color="light" [name]="feature.name"></ion-icon>
          </ion-button>
        </div>
      </ion-content>
      <ion-footer class="ion-no-border">
        <ion-toolbar>
          <ion-button fill="clear" (click)="toogleNotification()">
            <ion-icon slot="icon-only" color="light" size="small" [name]="(isNotifEnabled$|async) ? 'notifications-outline' :  'notifications-off-outline'"></ion-icon>
          </ion-button>
        </ion-toolbar>
      </ion-footer>
    </ion-menu>
    <ion-router-outlet id="main" mode="md"></ion-router-outlet>
  </ion-split-pane>
  `,
  styles: [`
    :host {
      ion-split-pane {
        --side-width: 70px!important;
        --side-min-width: 70px!important;
        --side-max-width: 70px!important;

        ion-menu {
          border: none;

          ion-footer {
            ion-toolbar {
              border-top: none;

              &::after {
                content: '';
                display: none;
              }
            }
  
          }

          &::part(container) {
            min-width: 70px!important;
            max-width: 70px!important;
          }
        }
      }
      ion-header, ion-toolbar {
        --background: var(--ion-color-primary)!important;
      }
      .header-md::after {
        display: none;
      }
      ion-header {
        .logo {
          margin: 10px auto 20px;
          padding: 0 10pxpx;
          max-width: 48px;
        }

      }
      .ion-page {
        background: #f3f3f3;
        > ion-content {
          --background: #f3f3f3;
        }  
      }
      
      .centervert {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    
        ion-button {
          margin: 0
        }
    
        .link {
          ion-icon {
            transition: all ease-in-out 125ms;
            color: var(--ion-color-secondary)!important;
          }
        }
        .active-link {
          ion-icon {
            color: var(--ion-color-primary)!important;
          }
        }
        ion-button:hover ion-icon {
          transform: scale(.9);
          color: var(--ion-color-primary)!important;
        }
      }
    }
  `],
})
export class DashboardComponent implements OnInit, OnDestroy {
  // public routerUrl$: Observable<string>;
  public features = [
    {name: 'home', url: 'welcome', sort: 0, isEnabled: false, isVisible: false},
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
  private readonly _subs: Subscription[] = [];

  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _toastService: ToastController,
    private readonly _loaderService: LoadingController,
    @Inject('APP_NOTIFICATION_SERVICE') private readonly _notificationService: INotificationService,
  ) {}

  ngOnInit() {
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
    this._router.navigate([`/d/${path}`])
  }

  async toogleNotification() {
    let message = '';
    const isConnected = await firstValueFrom(this._notificationService.isConnected$);
    if (isConnected) {
      await this._notificationService.disconnect();
      message = `Notifications are disabled`; 
    } else {
      const ionLoading = await this._loaderService.create({
        message: `Waiting signature from your wallet to enable notifications...`,
      });
      await ionLoading.present();
      message = await this._notificationService
      .connect()
      .then(() => `Notifications are  enabled`)
      .catch(() =>  'Failed to enable notifications');
      await ionLoading.dismiss();
    }
    await this.displayNotification(message);
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

}
