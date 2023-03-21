import { NotificationService, XMTPService } from "../services";

export const COMMUNICATION_PROVIDER = [
  {
    provide: 'APP_MESSAGING_SERVICE',
    useClass: XMTPService,
  },
  {
    provide: 'APP_NOTIFICATION_SERVICE',
    useClass: NotificationService,
  },
];