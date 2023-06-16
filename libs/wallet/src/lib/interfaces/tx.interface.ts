export interface ITXRequest {
  data: string;
  from: string;
  to: string;
  value: string;
  chainId: number;
  gasPrice: string;
  gasLimit: string;
}