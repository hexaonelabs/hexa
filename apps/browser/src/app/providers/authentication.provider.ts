import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';

import { DIDService, Web3AuthService, LocalAuthService, LocalDIDServcie } from "../services";
import { Provider } from '@angular/core';
import { environment } from '../../environments/environment';

export const AUTHENTICATION_PROVIDER: Provider[] = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_DID_SERVICE),
    useClass: (environment?.version?.includes('local')||false) 
      ? LocalDIDServcie 
      : DIDService,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE),
    useClass: (environment?.version?.includes('local')||false) 
      ? LocalAuthService 
      : Web3AuthService
  },
  
];