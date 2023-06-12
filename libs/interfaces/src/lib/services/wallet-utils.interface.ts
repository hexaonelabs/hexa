import { TokenInterface } from "../interfaces";

export interface IGetTokensBalances {
  
  /**
   * 
   * @param chainIds chain IDs as decimal format
   * @param address wallet address to use
   */
  getTokensBalances(
    chainIds: number[],
    address: string,
  ): Promise<{
    balances: TokenInterface[];
  }>;
}

export interface IGetAvailableTokens {
  getAvailableTokens(
    chainId: number
  ): Promise<{
    tokens: Partial<TokenInterface>[]
  }>
}
