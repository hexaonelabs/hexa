import { ethers } from "ethers";
import { ITXRequest } from "./tx.interface";

export interface EVMToken {
  address: string;
  symbol: string;
  decimals: number;
  chainId: number;
  name: string;
  priceUSD?: string;
  logoURI?: string;
}

export interface IGetPriceOptions {
  fromChainId: number;
  fromTokenAddress: string;
  fromAmount: string;

  toChainId: number;
  toTokenAddress: string;
  toAmount?: string;

  slippagePercentage?: number;
  fee?: number;
  referrer?: string;
}

export interface IGetPriceResponse extends IGetPriceOptions {
  fromToken: EVMToken;
  fromAmountUSD: string;

  toToken: EVMToken;
  toAmountUSD: string;

  estimatedGasUSD: string;
  feeCostUSD?: string;

  steps: {
    action: {
      slippage: number;
    };
    estimate: {
      executionDuration?: number;
      feeCosts?: {
        amountUSD?: string;
        included?: boolean;
      }[]
    };
    toolDetails: {
      name: string;
      logoURI: string;
    };
  }[];
}

export interface IGetQuoteOptions extends IGetPriceOptions {
  fromWalletAddress?: string;
};


export interface IGetQuoteResponse extends IGetQuoteOptions {
  chainId: number;
}

export interface ISwapservice {
  getPrice(ops: IGetPriceOptions): Promise<IGetPriceResponse[]>;
  getQuote(ops: IGetQuoteOptions): Promise<IGetQuoteResponse>;
  swap(provider: ethers.providers.Web3Provider, params: any): Promise<any>;
}