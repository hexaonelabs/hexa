import { InjectionToken } from "@angular/core";
import { IAuthService, IGetTokensBalances, IMessagingService, INotificationService, IPiningServiceConfig } from "@hexa/interfaces";
import { TOKENS_NAME } from "./token.enum";

const APP_DID_SERVICE_TOKEN = new InjectionToken<IAuthService>('APP_DID_SERVICE');
const APP_WEB3AUTH_SERVICE_TOKEN = new InjectionToken<IAuthService>('APP_WEB3AUTH_SERVICE');
const APP_PINNING_SERVICE_DEFAULT_CONFIG_TOKEN = new InjectionToken<IPiningServiceConfig>('APP_PINNING_SERVICE_DEFAULT_CONFIG');
const APP_WALLET_SERVICE_APIKEYS_TOKEN = new InjectionToken<{[key: string]: any;}>(TOKENS_NAME.APP_WALLET_SERVICE_APIKEYS);
const APP_WALLET_UTILS_TOKEN = new InjectionToken<IGetTokensBalances>(TOKENS_NAME.APP_WALLET_UTILS);
const APP_MESSAGING_SERVICE_TOKEN = new InjectionToken<IMessagingService>('APP_MESSAGING_SERVICE');
const APP_NOTIFICATION_SERVICE_TOKEN = new InjectionToken<INotificationService>('APP_NOTIFICATION_SERVICE');
const APP_CERAMIC_SERVICE_TOKEN = new InjectionToken('APP_CERAMIC_SERVICE');
const APP_DATASTORE_SERVICE_TOKEN = new InjectionToken('APP_DATASTORE_SERVICE');
const APP_DID_ENCRYPTION_SERVICE_TOKEN = new InjectionToken('APP_DID_ENCRYPTION_SERVICE');
const APP_ENCRYPTION_SERVICE_TOKEN = new InjectionToken('APP_ENCRYPTION_SERVICE');
const APP_IS_PROD_TOKEN = new InjectionToken('APP_IS_PROD');
const APP_LOADER_SERVICE_TOKEN = new InjectionToken('APP_LOADER_SERVICE');
const APP_PINATA_SERVICE_TOKEN = new InjectionToken('APP_PINATA_SERVICE');
const APP_WEB3STORAGE_SERVICE_TOKEN = new InjectionToken('APP_WEB3STORAGE_SERVICE');
const APP_IPFS_PINNING_SERVICE_TOKEN = new InjectionToken('APP_IPFS_PINNING_SERVICE');
const APP_IPFS_SERVICE_TOKEN = new InjectionToken('APP_IPFS_SERVICE');
const APP_PROMPT_STRATEGY_SERVICE_TOKEN = new InjectionToken('APP_PROMPT_STRATEGY_SERVICE');
const APP_AUTH_APIKEY_TOKEN = new InjectionToken('APP_AUTH_APIKEY');

const TOKENS_MAP = new Map();
TOKENS_MAP.set('APP_DID_SERVICE', APP_DID_SERVICE_TOKEN);
TOKENS_MAP.set('APP_WEB3AUTH_SERVICE', APP_WEB3AUTH_SERVICE_TOKEN);
TOKENS_MAP.set('APP_PINNING_SERVICE_DEFAULT_CONFIG', APP_PINNING_SERVICE_DEFAULT_CONFIG_TOKEN);
TOKENS_MAP.set(TOKENS_NAME.APP_WALLET_SERVICE_APIKEYS, APP_WALLET_SERVICE_APIKEYS_TOKEN);
TOKENS_MAP.set(TOKENS_NAME.APP_WALLET_UTILS, APP_WALLET_UTILS_TOKEN);
TOKENS_MAP.set('APP_MESSAGING_SERVICE', APP_MESSAGING_SERVICE_TOKEN);
TOKENS_MAP.set('APP_NOTIFICATION_SERVICE', APP_NOTIFICATION_SERVICE_TOKEN);
TOKENS_MAP.set('APP_CERAMIC_SERVICE', APP_CERAMIC_SERVICE_TOKEN);
TOKENS_MAP.set('APP_DATASTORE_SERVICE', APP_DATASTORE_SERVICE_TOKEN);
TOKENS_MAP.set('APP_DID_ENCRYPTION_SERVICE', APP_DID_ENCRYPTION_SERVICE_TOKEN);
TOKENS_MAP.set('APP_ENCRYPTION_SERVICE', APP_ENCRYPTION_SERVICE_TOKEN);
TOKENS_MAP.set('APP_IS_PROD', APP_IS_PROD_TOKEN);
TOKENS_MAP.set('APP_LOADER_SERVICE', APP_LOADER_SERVICE_TOKEN);
TOKENS_MAP.set('APP_PINATA_SERVICE', APP_PINATA_SERVICE_TOKEN);
TOKENS_MAP.set('APP_WEB3STORAGE_SERVICE', APP_WEB3STORAGE_SERVICE_TOKEN);
TOKENS_MAP.set('APP_IPFS_PINNING_SERVICE', APP_IPFS_PINNING_SERVICE_TOKEN);
TOKENS_MAP.set('APP_IPFS_SERVICE', APP_IPFS_SERVICE_TOKEN);
TOKENS_MAP.set('APP_PROMPT_STRATEGY_SERVICE', APP_PROMPT_STRATEGY_SERVICE_TOKEN);
TOKENS_MAP.set('APP_AUTH_APIKEY', APP_AUTH_APIKEY_TOKEN);

export function getInjectionToken(tokenName: string) {
  return TOKENS_MAP.get(tokenName);
}
