import { EnvironmentProviders, Provider } from "@angular/core";
import { IAuthService, IPiningService } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import { environment } from "../../environments/environment";
import { IPFSService, PinataService, LocalIPFSService } from "../services";
import { Web3storageService } from "../services/web3storage.service";
import { IPFSPinningStrategy } from "../strategies";

export const MEDIA_STORAGE_PROVIDER: (Provider | EnvironmentProviders)[]= [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_PINATA_SERVICE),
    useClass: PinataService,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_WEB3STORAGE_SERVICE),
    useClass: Web3storageService,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_IPFS_SERVICE),
    useClass: (environment?.version?.includes('local')||false)
      ? LocalIPFSService
      : IPFSService
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_IPFS_PINNING_SERVICE),
    useFactory: (authService: IAuthService, pinata: IPiningService, web3: IPiningService) => {
      // use default service
      const profil = authService.profile$.value;
      const serviceName = profil.ipfsConfig?.serviceName;
      
      const mapStrategy = new Map();
      mapStrategy.set('pinata', pinata);
      mapStrategy.set('web3storage', web3);
      
      const strategy = new IPFSPinningStrategy(mapStrategy);
      (serviceName) 
        ? strategy.setStrategy<string>(serviceName)
        : strategy.setStrategy<string>('pinata'); // default service
      // use local if local
      return (environment?.version?.includes('local')||false)
        ? <IPiningService>{
          pin: async (hash: string) => {
            console.log(`[LocalIPFSPinningStrategy] pin: ${hash}`);
          },
          unpin: async (hash: string) => {
            console.log(`[LocalIPFSPinningStrategy] unpin: ${hash}`);
          }
        }
        : strategy;
    },
    deps: [
      getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE), 
      getInjectionToken(TOKENS_NAME.APP_PINATA_SERVICE),
      getInjectionToken(TOKENS_NAME.APP_WEB3STORAGE_SERVICE)
    ],
  },
];