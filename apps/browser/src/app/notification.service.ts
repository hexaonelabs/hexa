import { Inject, Injectable } from '@angular/core';
import { IAuthService, IIdentityService } from '@d-workspace/interfaces';
import { debounceTime, map, tap } from 'rxjs';
import { XMTPService } from './messaging.service';

@Injectable()
export class NotificationService {
  public readonly notifications$ = this._xmtp.messages$.pipe(
    // formating messages to be displayed
    map((messages) =>
      messages
        .map((message) => message.messagesInConversation)
        .flat()
        // filter only application messages
        .filter((m) => m.content.startsWith('d-workspace'))
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
          this._xmtp.messages$.next([]);
          clearTimeout(t);
        }, 2500);
      }
    })
  );
  public readonly isConnected$ = this._xmtp.isConnected$;

  constructor(
    private readonly _xmtp: XMTPService,
    @Inject('APP_WEB3AUTH_SERVICE') private readonly _authService: IAuthService
  ) {}

  async connect() {
    await this._xmtp.connect();
        await this._xmtp.loadDatas();
  }

  async disconnect() {
    await this._xmtp.disconnect();
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
    const base64Data = `d-workspace/${filterKey}:${btoa(
      JSON.stringify(messageData)
    )}`;
    // send message
    await this._xmtp.sendMessage({
      destinationAddress,
      message: base64Data,
    });
    console.log('[INFO] {NotificationService} message sent: ', base64Data);
  }

  private _parseMessage(value: string) {
    const base64Message = value.replace('d-workspace/', '');
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