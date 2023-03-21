import { BehaviorSubject, Observable } from "rxjs";

export interface IBaseMessage<C,M> {
  conversation?: C;
  messagesInConversation: M[];
}

export interface IBaseMessagingService {
  isConnected$: Observable<boolean>;
  init?(...args: any[]): Promise<void>;
  connect(): Promise<void>;
  disconnect(): Promise<void>;
}

export interface IMessagingService extends IBaseMessagingService {
  messages$: BehaviorSubject<IBaseMessage<any, any>[]>;
  loadDatas<T>(opts?: T): Promise<void>;
  sendMessage(ops: {
    destinationAddress: string;
    message: string;
  }): Promise<void>
}
