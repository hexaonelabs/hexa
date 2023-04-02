import type { DID } from '@hexa/dids';
import { ethers } from 'ethers';
import { BehaviorSubject } from "rxjs";

export interface IIdentityService {
  did$: BehaviorSubject<DID>;
  connectWallet(provider: ethers.providers.ExternalProvider | undefined, account: string): Promise<boolean>;
  // getAccountDID(address: string, chainParam?: string): Promise<string>;
  // getProfilData(): Promise<{
  //   latestConnectionISODatetime: string;
  //   latestNotifedISODatetime?: string;
  // }>;
  // updateProfilData(data: Partial<{
  //   latestConnectionISODatetime: string;
  //   latestNotifedISODatetime: string;
  // }>): Promise<{
  //   latestConnectionISODatetime: string;
  //   latestNotifedISODatetime?: string;
  // }>;
}