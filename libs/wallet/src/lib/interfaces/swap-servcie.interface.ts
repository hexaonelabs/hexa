import { ethers } from "ethers";
import { ITXQuote } from "./tx-quote.interface";

export interface IGetPriceOptions {
  sellToken: string;
  buyToken: string;
  sellAmount: number;
  buyAmount?: string;
  slippagePercentage?: number;
  gasPrice?: string;
  feeRecipient?: string;
  buyTokenPercentageFee?: number;
  affiliateAddress?: string;
  chainId: number;
}

export interface IGetQuoteOptions {
  buyToken: string;
  sellToken: string;
  sellAmount: string;
  buyAmount?: string;
  slippagePercentage?: number;
  gasPrice?: string;
  feeRecipient?: string;
  buyTokenPercentageFee?: number;
  affiliateAddress?: string;
  chainId: number;
  takerAddress?: string;
};

// export interface ISwapOption  {
//   provider: ethers.providers.Web3Provider;
//   txQuote: ITXQuote;
//   takerAddress?: string;
// }

export interface ISwapservice {
  getPrice(ops: IGetPriceOptions): Promise<{buyAmount: number; estimatedGas:number;}>;
  getQuote(ops: IGetQuoteOptions): Promise<ITXQuote>;
  swap(provider: ethers.providers.Web3Provider, txQuote: ITXQuote): Promise<ethers.providers.TransactionReceipt>;
}