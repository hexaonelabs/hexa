import { ethers } from "ethers";
import { ITXQuote } from "./tx-quote.interface";

export interface IGetPriceOptions {
  sellToken: string;
  buyToken: string;
  sellAmount: number;
  chainId: number;
}

export interface IGetQuoteOptions {
  buyToken: string;
  sellToken: string;
  sellAmount: string;
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