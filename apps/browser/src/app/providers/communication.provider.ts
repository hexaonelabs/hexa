import { NotificationService, XMTPService } from "../services";

export const COMMUNICATION_PROVIDER = [
  XMTPService,
  {
    provide: 'APP_NOTIFICATION_SERVICE',
    useClass: NotificationService,
  },
];