export interface TokenInterface {
  address: string;
  name: string;
  symbol: string;
  logo?: string;
  logoURI?: string;
  type: string;
  nft_data: any;
  decimals: number;
  balance: number;
  rate: number;
  rate24h?: number;
  value: number;
  chainId?: number;
  chainLogo?: string;
  ownerAddress?: string;
}