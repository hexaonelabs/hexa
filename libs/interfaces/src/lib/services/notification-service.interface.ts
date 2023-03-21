import { Observable } from "rxjs";
import { IBaseMessagingService } from "./messaging-service.interface";

export interface INotificationService extends IBaseMessagingService {
  notifications$: Observable<string[]>;
  sendNotification(
    metaData: any,
    senderAddress: string,
    destinationAddress: string,
    filterKey: string
  ): Promise<void>;
}