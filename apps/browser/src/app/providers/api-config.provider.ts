import { environment } from "../../environments/environment";

export const API_CONFIG_PROVIDER = [
  {
    provide: 'APP_PINNING_SERVICE_CONFIG',
    useValue: {
      pinning_endpoint: environment.ipfs.pinning_service_endpoint,
      unpinning_endpoint: environment.ipfs.unpinning_service_endpoint,
      token: environment.ipfs.pinning_service_token,
    },
  },
  {
    provide: 'APP_WALLET_SERVICE_APIKEY',
    useValue: environment.wallet_service_apikey,
  },
]