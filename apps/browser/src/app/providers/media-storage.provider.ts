import { EnvironmentProviders, Provider } from "@angular/core";
import { getInjectionToken, IAuthService, IPiningService, TOKENS_NAME } from "@d-workspace/interfaces";
import { IPFSService, PinataService } from "../services";
import { Web3storageService } from "../services/web3storage.service";
import { IPFSPinningStrategy } from "../strategies";

export const MEDIA_STORAGE_PROVIDER: (Provider | EnvironmentProviders)[]= [
  {
    provide: 'APP_PINATA_SERVICE',
    useClass: PinataService,
  },
  {
    provide: 'APP_WEB3STORAGE_SERVICE',
    useClass: Web3storageService,
  },
  {
    provide: 'APP_IPFS_SERVICE',
    useClass: IPFSService,
  },
  {
    provide: 'APP_IPFS_PINNING_SERVICE',
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
      return strategy;
    },
    deps: [
      getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE), 
      'APP_PINATA_SERVICE',
      'APP_WEB3STORAGE_SERVICE',
    ],
  },
];