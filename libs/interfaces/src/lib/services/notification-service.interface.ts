import { Observable } from "rxjs";

export interface INotificationService {
  isConnected$: Observable<boolean>;
  notifications$: Observable<string[]>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
  sendNotification(
    metaData: any,
    senderAddress: string,
    destinationAddress: string,
    filterKey: string
  ): Promise<void>;
}