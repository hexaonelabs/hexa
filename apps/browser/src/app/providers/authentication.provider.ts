import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';
import { DIDService, Web3AuthService } from "../services";

export const AUTHENTICATION_PROVIDER = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE),
    useClass: Web3AuthService,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_DID_SERVICE),
    useClass: DIDService,
  },
];