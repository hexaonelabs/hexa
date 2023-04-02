import { CeramicClient } from "@ceramicnetwork/http-client";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { DatastoreService } from "../services";

const CERAMIC_CLIENT = new CeramicClient('https://ceramic-clay.3boxlabs.com');

export const DATABASE_PROVIDER = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_CERAMIC_SERVICE),
    useValue: CERAMIC_CLIENT,
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_DATASTORE_SERVICE),
    useClass: DatastoreService,
  },
];