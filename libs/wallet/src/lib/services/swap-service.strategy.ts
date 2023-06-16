import { Injectable } from "@angular/core";
import { IGetPriceOptions, IGetQuoteOptions, ISwapservice } from "../interfaces/swap-servcie.interface";
import { Strategy } from '@hexa/interfaces';
import { ethers } from "ethers";
import { ITXRequest } from "../interfaces/tx.interface";

@Injectable()
export class SwapeServiceStrategy extends Strategy<ISwapservice> implements ISwapservice {
  public readonly strategyType = 'swap';

  async getPrice(ops: IGetPriceOptions) {
    return this._lib.getPrice(ops)
  }

  async getQuote(ops: IGetQuoteOptions) {
    return this._lib.getQuote(ops);
  }

  async swap(
    provider: ethers.providers.Web3Provider, 
    params: any
  ) {
    return this._lib.swap(provider,params);
  }

}