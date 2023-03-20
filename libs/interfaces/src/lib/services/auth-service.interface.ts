import { BehaviorSubject, distinctUntilChanged, filter, firstValueFrom, map, switchMap } from "rxjs";
import { ethers } from 'ethers';
import { DID } from '@d-workspace/dids';

export interface IAuthUser {
  latestConnectionISODatetime?: string; 
  latestNotifedISODatetime?: string;
  creationISODatetime?: string;
}

export interface IAuthService {
  ethereumProvider$: BehaviorSubject<ethers.providers.Web3Provider>;
  signer$: BehaviorSubject<ethers.providers.JsonRpcSigner>;
  account$: BehaviorSubject<string>;
  profile$: BehaviorSubject<IAuthUser>;
  did$: BehaviorSubject<DID>;
  connect(redirectUrl?: string): Promise<boolean>;
  disconnect(): Promise<void>;
  getAccountDID(address: string, chainParam?: string): Promise<string>;
  getProfilData(): Promise<IAuthUser>;
  updateProfilData(data: Partial<IAuthUser>): Promise<IAuthUser>;
}