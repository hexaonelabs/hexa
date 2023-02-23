
export interface IPiningServiceConfig {
  pinning_endpoint: string;
  unpinning_endpoint: string;
  token: string;
}

export interface IPiningService {
  pin(cid: string): Promise<void>;
  unpin(cid: string): Promise<void>;
}