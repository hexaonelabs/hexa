import { AssetTransfersResponse } from "alchemy-sdk";
import { TokenInterface } from "../interfaces";
import { TransactionReceipt } from "@ethersproject/abstract-provider";

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

export interface ISendAsset {
  sendAsset(
    to: string, 
    send_token_amount: string, 
    contract_address?: string
  ): Promise<TransactionReceipt | AssetTransfersResponse>
}