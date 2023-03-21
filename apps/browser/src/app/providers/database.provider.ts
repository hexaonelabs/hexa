import { CeramicClient } from "@ceramicnetwork/http-client";
import { DatastoreService } from "../services";

const CERAMIC_CLIENT = new CeramicClient('https://ceramic-clay.3boxlabs.com');

export const DATABASE_PROVIDER = [
  {
    provide: 'APP_CERAMIC_SERVICE',
    useValue: CERAMIC_CLIENT,
  },
  {
    provide: 'APP_DATASTORE_SERVICE',
    useClass: DatastoreService,
  },
];