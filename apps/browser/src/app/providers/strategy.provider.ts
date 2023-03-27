import { EnvironmentProviders, Provider } from "@angular/core";
import { getInjectionToken, TOKENS_NAME } from "@d-workspace/token-injection";
import { PromptStrategyService } from "../services/prompt-strategy.service";

export const PROMPT_STRATEGY_PROVIDER: (Provider | EnvironmentProviders)[]= [
  {
    provide: getInjectionToken(TOKENS_NAME.APP_PROMPT_STRATEGY_SERVICE),
    useClass: PromptStrategyService,
  },
];