import { Provider } from "@angular/core";
import { IPiningServiceConfig } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { environment } from "../../environments/environment";
import { covalentFactory, localWalletApiFactory } from "../services";

const defaultValue: IPiningServiceConfig = {
  token: environment?.ipfs.pinning_service_token||'',
  serviceName: 'default-pinata',
}

export const API_CONFIG_PROVIDER: Provider[] = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_PINNING_SERVICE_DEFAULT_CONFIG),
    useValue: defaultValue,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_WALLET_SERVICE_APIKEY),
    useFactory: () => {
      return (environment?.version?.includes('local')||false)
        ? localWalletApiFactory()
        : covalentFactory(environment?.wallet_service_apikey)
    }
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_AUTH_APIKEY),
    useValue: environment?.auth?.apikey,
  }
]