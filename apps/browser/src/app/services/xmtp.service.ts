import { inject, Injectable } from '@angular/core';
import {
  Client,
  Conversation,
  DecodedMessage,
  ListMessagesOptions,
} from '@xmtp/xmtp-js';
import { BehaviorSubject, map } from 'rxjs';
import { ethers } from 'ethers';
import { IBaseMessage, IMessagingService } from '@d-workspace/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';

export type XMTPConversation = Conversation;
export type XMTPConversationMessage = DecodedMessage;

export type IXMTPMessage = IBaseMessage<XMTPConversation, XMTPConversationMessage>;

@Injectable()
export class XMTPService implements IMessagingService {
  public readonly messages$: BehaviorSubject<IXMTPMessage[]> =
    new BehaviorSubject<IXMTPMessage[]>([]);
  private _web3Provider!: ethers.providers.Web3Provider;
  private _ops: {
    startTime: Date;
    endTime: Date;
} | undefined = undefined;
  private readonly _conversations: BehaviorSubject<Conversation[]> =
    new BehaviorSubject<Conversation[]>([]);
  private readonly _xmtp: BehaviorSubject<Client> = new BehaviorSubject<Client>(
    null as any
  );
  public readonly isConnected$ = this._xmtp.asObservable().pipe(
    map((xmtp) => Boolean(xmtp))
  );
  private readonly _isProduction = inject<boolean>(getInjectionToken(TOKENS_NAME.APP_IS_PROD));

  async init(web3Provider: ethers.providers.Web3Provider, ops: {
    startTime: Date;
    endTime: Date;
} | undefined = undefined) {
    this._web3Provider = web3Provider;
    this._ops = ops;
  }

  async connect() {
    if (!this._web3Provider) {
      throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
    }
    // Create the client with your wallet.
    // This will connect to the XMTP development network by default
    const xmtp = await Client.create(this._web3Provider.getSigner(), {
      env: this._isProduction ? 'production' : 'dev',
    });
    console.log('[INFO] {XMTPService} XMTP client created successfully');
    this._xmtp.next(xmtp);
  }

  async loadDatas<T>(opts = <T>this._ops) {
    const {conversationId = undefined, ...options} = opts || {} as any;
    const {conversations = []} = await this._getConversations(conversationId);
    this._conversations.next(conversations);
    const messages = await this._getPreviousMessagesFromExistingConverstion(options);
    this.messages$.next(messages);
    this._listenAllUpcomingMessages();
  }

  async disconnect() {
    const xmtp = this._xmtp.getValue();
    if (!xmtp) {
      return;
    }
    await xmtp.close();
    this._xmtp.next(null as any);
  }

  async sendMessage(ops: {destinationAddress: string, message: string}) {
    if (!this._web3Provider) {
      throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
    }
    const {destinationAddress, message} = ops;
    const {value: conversations = []} = this._conversations;
    let conversation = conversations.find(
      (c) => c.peerAddress === destinationAddress
    );
    if (!conversation) {
      const {conversation: newConversation} = await this._startNewConversation(
        destinationAddress
      )
      conversation = newConversation;
    }
    if (!conversation) {
      throw 'Error while creating conversation';
    }
    // await conversation.send(message);
  }

  private async _startNewConversation(address: string, conversationId: string = 'd-workspace') {
    if (!this._web3Provider) {
      throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
    }
    let xmtp = this._xmtp.getValue();
    if (!xmtp) {
      await this.connect();
      xmtp = this._xmtp.getValue();
    }
    const conversation = await xmtp.conversations
      .newConversation(address, { conversationId, metadata: {} })
      .catch((e) => {
        throw e?.message || `Failed to start conversation with ${address}`;
      });
    // this._addListener(conversation);
    this._conversations.next([...this._conversations.getValue(), conversation]);
    return { conversation };
  }

  private async _getConversations(conversationId = 'd-workspace') {
    if (!this._web3Provider) {
      throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
    }
    let xmtp = this._xmtp.getValue();
    if (!xmtp) {
      await this.connect();
      xmtp = this._xmtp.getValue();
    }
    const allConversations = await xmtp.conversations.list();
    const conversations = allConversations.filter(
      (convo) =>
        convo.context?.conversationId &&
        convo.context.conversationId.startsWith(conversationId)
    )
    return { conversations };
  }

  private async _getPreviousMessagesFromExistingConverstion(
    opts?: ListMessagesOptions | undefined
  ): Promise<IXMTPMessage[]> {
    const xmtp = this._xmtp.value;
    const messages = [];
    const conversations = this._conversations.getValue();
    console.log('[INFO] {XMTPService} Conversations', conversations, opts);
    for (const conversation of conversations) {
      // All parameters are optional and can be omitted
      opts = opts
        ? opts
        : {
            // Only show messages from last 24 hours
            startTime: new Date(new Date().setDate(new Date().getDate() - 1)),
            endTime: new Date(),
          };
      // get messages from conversation
      const messagesInConversation = await conversation
        .messages(opts)
        .then((messages) => {
          // filter out messages from self and return
          return messages.filter(
            (message) => message.senderAddress !== xmtp.address
          );
        });
      // add conversation and messages to messages array
      if (messagesInConversation.length > 0) {
        messages.push({
          conversation,
          messagesInConversation,
        });
      }
    };
    console.log('[INFO] {XMTPService} Messages', messages);
    return messages;
  }

  private async _listenAllUpcomingMessages() {
    if (!this._web3Provider) {
      throw '{XMTPService} Web3Provider not found. Please unlock your Ethereum account, refresh the page and try again.';
    }
    const xmtp = this._xmtp.value;
    // Listen for new messages in existing conversations and new conversations
    const streamAllMessages = await xmtp.conversations.streamAllMessages();
    for await (const message of streamAllMessages) {
      // filter out messages from self
      if (message.senderAddress !== xmtp.address) {
        console.log(
          `[INFO] {XMTPService} New message received from ${message.senderAddress}: #${message?.id} ${message?.content}`
        );
        this.messages$.next([
          ...this.messages$.getValue(),
          {
            messagesInConversation: [message]
          }
        ]);
      }
      break;
    }
  }

}