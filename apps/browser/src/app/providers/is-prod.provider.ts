import { getInjectionToken, TOKENS_NAME } from "@d-workspace/token-injection";
import { environment } from "../../environments/environment";

export const IS_PROD_PROVIDER = [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_IS_PROD),
    useValue: environment.production,
  },
]