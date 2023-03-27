import { EnvironmentProviders, Provider } from "@angular/core";
import { ERROR_PROVIDER } from "./error.provider";
import { IS_PROD_PROVIDER } from "./is-prod.provider";
import { LOADER_PROVIDER } from "./loader.provider";
import { API_CONFIG_PROVIDER } from "./api-config.provider";
import { AUTHENTICATION_PROVIDER } from "./authentication.provider";
import { ENCRYPTION_PROVIDER } from "./encryption.provider";
import { DATABASE_PROVIDER } from "./database.provider";
import { COMMUNICATION_PROVIDER } from "./communication.provider";
import { MEDIA_STORAGE_PROVIDER } from "./media-storage.provider";
import { PROMPT_STRATEGY_PROVIDER } from "./strategy.provider";

export const PROVIDERS: (Provider | EnvironmentProviders)[]  = [
  ...PROMPT_STRATEGY_PROVIDER, // zero dependency first
  ...API_CONFIG_PROVIDER,
  ...AUTHENTICATION_PROVIDER,
  ...DATABASE_PROVIDER,
  ...COMMUNICATION_PROVIDER,
  ...ENCRYPTION_PROVIDER,
  ...ERROR_PROVIDER,
  ...IS_PROD_PROVIDER,
  ...LOADER_PROVIDER,
  ...MEDIA_STORAGE_PROVIDER,
];