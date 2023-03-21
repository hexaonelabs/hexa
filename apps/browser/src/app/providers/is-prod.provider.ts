import { environment } from "../../environments/environment";

export const IS_PROD_PROVIDER = [
  {
    provide: 'APP_IS_PROD',
    useValue: environment.production,
  },
]