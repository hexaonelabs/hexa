import { BehaviorSubject } from "rxjs";
import { ethers } from 'ethers';
import { DID } from '@hexa/dids';
import { IPiningServiceConfig } from "./pining-service.interface";

export interface IAuthUser {
  latestConnectionISODatetime?: string; 
  latestNotifedISODatetime?: string;
  creationISODatetime?: string;
  ipfsConfig?: IPiningServiceConfig;
}

export interface IAuthGuardService {
  // onboard: {
  //   connectWallet: (options?: ConnectOptions | ConnectOptionsString | undefined) => Promise<WalletState[]>;
  // },
  connectWallet(address: string): Promise<boolean>;
  isWaiting$: BehaviorSubject<boolean>
}
export interface IAuthService {
  ethereumProvider$: BehaviorSubject<ethers.providers.Web3Provider>;
  signer$: BehaviorSubject<ethers.providers.JsonRpcSigner>;
  account$: BehaviorSubject<string>;
  profile$: BehaviorSubject<IAuthUser>;
  did$: BehaviorSubject<DID>;
  connect(accountToConnect?: string): Promise<boolean>;
  disconnect(): Promise<void>;
  getAccountDID(address: string, chainParam?: string): Promise<string>;
  getProfilData(): Promise<IAuthUser>;
  updateProfilData(data: Partial<IAuthUser>): Promise<IAuthUser>;
}