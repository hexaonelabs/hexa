import { BehaviorSubject, distinctUntilChanged, filter, firstValueFrom, map, switchMap } from "rxjs";
import { ethers } from 'ethers';

export interface IAuthService {
  ethereumProvider$: BehaviorSubject<ethers.providers.Web3Provider>;
  signer$: BehaviorSubject<ethers.providers.JsonRpcSigner>;
  account$: BehaviorSubject<string>;
  did$: BehaviorSubject<any>;
  connect(redirectUrl?: string): Promise<boolean>;
  disconnect(): Promise<void>;
  getAccountDID(address: string, chainParam?: string): Promise<string>;
}