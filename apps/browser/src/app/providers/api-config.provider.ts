import { Provider } from "@angular/core";
import { IPiningServiceConfig } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { environment } from "../../environments/environment";

const defaultValue: IPiningServiceConfig = {
  token: environment?.ipfs.pinning_service_token||'',
  serviceName: 'default-pinata',
}

export const API_CONFIG_PROVIDER: Provider[] = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_WALLET_SERVICE_APIKEYS),
    useValue: environment.wallet
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_PINNING_SERVICE_DEFAULT_CONFIG),
    useValue: defaultValue,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_AUTH_APIKEY),
    useValue: environment?.auth?.apikey,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_HEXA_PUBLICADDRES),
    useValue: environment?.hexaPublicAddress,
  }
]