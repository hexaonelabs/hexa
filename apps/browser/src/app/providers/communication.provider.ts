import { getInjectionToken, TOKENS_NAME } from "@d-workspace/token-injection";
import { NotificationService, XMTPService } from "../services";

export const COMMUNICATION_PROVIDER = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_MESSAGING_SERVICE),
    useClass: XMTPService,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_NOTIFICATION_SERVICE),
    useClass: NotificationService,
  },
];