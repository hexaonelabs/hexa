export interface TokenInterface {
  address: string;
  name: string;
  symbol: string;
  type: string;
  decimals: number;
  balance: number;
  rate: number;
  value: number;
  rate24h?: number;
  nft_data?: any;
  priceUSD?: number;
  logo?: string;
  ownerAddress?: string;
  chain: {
      id: number;
      name: string;
      logo?: string;
      isTestnet?: boolean;
  }
}