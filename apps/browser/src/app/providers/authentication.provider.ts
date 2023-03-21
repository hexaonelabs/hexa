import { DIDService, Web3AuthService } from "../services";

export const AUTHENTICATION_PROVIDER = [
  {
    provide: 'APP_WEB3AUTH_SERVICE',
    useClass: Web3AuthService,
  },
  {
    provide: 'APP_DID_SERVICE',
    useClass: DIDService,
  },
];