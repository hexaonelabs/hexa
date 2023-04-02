import { Inject, Injectable } from '@angular/core';
import { IAuthService, IMessagingService, INotificationService } from '@hexa/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import { LoadingController } from '@ionic/angular';
import { debounceTime, map, tap } from 'rxjs';

@Injectable()
export class NotificationService implements INotificationService {
  public readonly notifications$ = this._messagingService.messages$.pipe(
    // formating messages to be displayed
    map((messages) =>
      messages
        .map((message) => message.messagesInConversation)
        .flat()
        // filter only application messages
        .filter((m) => m.content.startsWith('hexa'))
        // parse message
        .map((m) => this._parseMessage(m.content))

    ),
    debounceTime(1000),
    // update the user profil `latestNotifedISODatetime` field
    // each time a new notification is received from XMTP
    tap((messages) =>
      messages.length > 0
        ? this._authService
          .updateProfilData({
              latestNotifedISODatetime: new Date().toISOString(),
            })
            .then(() =>
              console.log(
                '[INFO] {NOTIFService} User profil `latestNotifedISODatetime` updated'
              )
            )
        : null
    ),
    // update user `sharedDocument` list data
    tap((messages) => {
      // TODO: update user `sharedDocument` list data using `CeramicService`
    }),
    // clear `messages` BehaviorSubject after XXXXms
    // to avoid displaying the same messages twice
    tap((messages) => {
      if (messages.length > 0) {
        // clear messages
        const t = setTimeout(() => {
          this._messagingService.messages$.next([]);
          clearTimeout(t);
        }, 2500);
      }
    })
  );
  public readonly isConnected$ = this._messagingService.isConnected$;

  constructor(
    private readonly _loaderCtrl: LoadingController,
    @Inject(getInjectionToken(TOKENS_NAME.APP_MESSAGING_SERVICE)) private readonly _messagingService: IMessagingService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)) private readonly _authService: IAuthService
  ) {}

  async connect() {
    const ionLoading = await this._loaderCtrl.create({
      message: `Waiting signature from your wallet to enable notifications...`,
    });
    await ionLoading.present();
    await this._messagingService.connect().catch((error) => {
      ionLoading.dismiss();
      throw error;
    });
    await ionLoading.dismiss();
    await this._messagingService.loadDatas();
  }

  async disconnect() {
    await this._messagingService.disconnect();
  }

  async sendNotification(
    metaData: any,
    senderAddress: string,
    destinationAddress: string,
    filterKey: string
  ) {
    // formating message
    const messageData: any = {
      metaData,
      senderAddress,
      createdISODateTime: new Date().toISOString(),
    };
    // encoding message
    const base64Data = `hexa/${filterKey}:${btoa(
      JSON.stringify(messageData)
    )}`;
    // send message
    await this._messagingService.sendMessage({
      destinationAddress,
      message: base64Data,
    });
    console.log('[INFO] {NotificationService} message sent: ', base64Data);
  }

  private _parseMessage(value: string) {
    const base64Message = value.replace('hexa/', '');
    const [prefixKey, ...b64messageArray] = base64Message.split(':');
    const jsonMessage = atob(b64messageArray.toString());
    let message;
    let dataMessage: { metaData?: any; senderAddress?: string };
    try {
      dataMessage = JSON.parse(jsonMessage);
    } catch (error) {
      message = 'Error while parsing message';
      console.log('[ERROR] {NotificationService} _parseMessage: ', error);
      return message;
    }
    switch(true) {
      case prefixKey === 'drive':
        message = `You have a new shared document from ${dataMessage.senderAddress}`;
        break;
      case prefixKey === 'calendar':
        message = `You have a new shared event from ${dataMessage.senderAddress}`;
        break;
      case prefixKey === 'note':
        message = `You have a new shared note from ${dataMessage.senderAddress}`;
        break;
      default:
        message = 'You have a new notification';
    }
    return message;
  }
}