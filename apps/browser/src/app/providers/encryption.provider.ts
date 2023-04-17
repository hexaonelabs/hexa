import { IEncryptionService } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { environment } from "../../environments/environment";
import { DIDEncryptionService, LocalEncryptionService } from "../services";
import { EncryptionStrategy } from "../strategies";

export const ENCRYPTION_PROVIDER = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_DID_ENCRYPTION_SERVICE),
    useClass: (environment?.version?.includes('local')||false)
      ? LocalEncryptionService
      : DIDEncryptionService
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_ENCRYPTION_SERVICE),
    useFactory: (encryptLib: IEncryptionService): EncryptionStrategy => {
      // setup default encryption strategy with DID Encryption Service.
      // You can change this to use a different encryption service 
      // by calling setStrategy() on the EncryptionStrategy instance.
      const strategy = new EncryptionStrategy();
      strategy.setStrategy(encryptLib);
      return strategy;
    },
    deps: [getInjectionToken(TOKENS_NAME.APP_DID_ENCRYPTION_SERVICE)],
  },
];