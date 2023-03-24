import { IPiningServiceConfig } from "@d-workspace/interfaces";
import { environment } from "../../environments/environment";

const defaultValue: IPiningServiceConfig = {
  token: environment.ipfs.pinning_service_token||'',
  serviceName: 'default-pinata',
}

export const API_CONFIG_PROVIDER = [
  {
    provide: 'APP_PINNING_SERVICE_DEFAULT_CONFIG',
    useValue: defaultValue,
  },
  {
    provide: 'APP_WALLET_SERVICE_APIKEY',
    useValue: environment.wallet_service_apikey,
  },
]