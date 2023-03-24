import { Strategy } from "../interfaces";

export interface IPiningServiceConfig {
  serviceName: string;
  pinning_endpoint?: string;
  unpinning_endpoint?: string;
  token: string;
}

export interface IPiningService {
  pin(cid: string): Promise<void>;
  unpin(cid: string): Promise<void>;
}

export interface IPinningServiceStrategy extends Strategy<string>, IPiningService {}