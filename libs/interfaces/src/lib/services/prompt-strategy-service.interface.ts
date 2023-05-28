export interface IAskSetupServiceOptions {
        token: string;
        serviceName: string;
      }

export interface IPromptStrategyService {
  askSetupService(opts: any): Promise<
    | any
    | undefined
  >;
}
