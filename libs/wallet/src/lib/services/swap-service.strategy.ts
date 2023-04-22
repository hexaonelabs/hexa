import { Injectable } from "@angular/core";
import { IGetPriceOptions, IGetQuoteOptions, ISwapservice } from "../interfaces/swap-servcie.interface";
import { Strategy } from '@hexa/interfaces';
import { ethers } from "ethers";
import { ITXQuote } from "../interfaces/tx-quote.interface";

@Injectable()
export class SwapeServiceStrategy extends Strategy<ISwapservice> implements ISwapservice {
  public readonly strategyType = '0x';

  async getPrice(ops: IGetPriceOptions): Promise<{buyAmount: number; estimatedGas:number;}> {
    return this._lib.getPrice(ops)
  }

  async getQuote(ops: IGetQuoteOptions) {
    return this._lib.getQuote(ops);
  }

  async swap(
    provider: ethers.providers.Web3Provider, 
    txQuote: ITXQuote
  ) {
    return this._lib.swap(provider,txQuote);
  }

}