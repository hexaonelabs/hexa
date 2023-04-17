import { Provider } from "@angular/core";
import { CeramicClient } from "@ceramicnetwork/http-client";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { environment } from "../../environments/environment";
import { DatastoreService, LocalDatastoreServcie } from "../services";

export const DATABASE_PROVIDER: Provider[] = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_CERAMIC_SERVICE),
    useFactory: () => {
      const public_node = 'https://ceramic-clay.3boxlabs.com';
      const hexaCeramicNode = 'http://ec2-35-171-157-60.compute-1.amazonaws.com:7007';
      const CERAMIC_CLIENT = new CeramicClient(public_node);
      return (environment?.version?.includes('local')||false) 
        ? null
        : CERAMIC_CLIENT;
    },
  },
  {
    provide: getInjectionToken(TOKENS_NAME.APP_DATASTORE_SERVICE),
    useClass: (environment?.version?.includes('local')||false)
      ? LocalDatastoreServcie
      : DatastoreService
  },
];