export interface IPromptStrategyService {
  askSetupService(serviceName?: string): Promise<
    | {
        token: string;
        serviceName: string;
      }
    | undefined
  >;
}
