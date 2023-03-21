import { IEncryptionService } from "@d-workspace/interfaces";
import { DIDEncryptionService } from "../services";
import { EncryptionStrategy } from "../strategies";

export const ENCRYPTION_PROVIDER = [
  {
    provide: 'APP_DID_ENCRYPTION_SERVICE',
    useClass: DIDEncryptionService,
  },
  {
    provide: 'APP_ENCRYPTION_SERVICE',
    useFactory: (encryptLib: IEncryptionService): IEncryptionService => {
      // setup default encryption strategy with DID Encryption Service.
      // You can change this to use a different encryption service 
      // by calling setStrategy() on the EncryptionStrategy instance.
      const strategy = new EncryptionStrategy();
      strategy.setStrategy(encryptLib);
      return strategy;
    },
    deps: ['APP_DID_ENCRYPTION_SERVICE'],
  },
];