import { BigNumber, ethers } from 'ethers';
import { stringify } from 'qs'
import { MAINNET, TESTNETS } from '../constants/chains.constant';
import { erc20abi } from '../constants/erc20abi.constant';
import {
  IGetPriceOptions,
  IGetPriceResponse,
  IGetQuoteOptions,
  IGetQuoteResponse,
  ISwapservice,
} from '../interfaces/swap-servcie.interface';
import LIFI, { Route, RouteOptions } from '@lifi/sdk';

interface IRoutesRequest {
  fromChainId: number;
  fromAmount: string;
  fromTokenAddress: string;
  fromAddress?: string;
  toChainId: number;
  toTokenAddress: string;
  toAddress?: string;
  options?: RouteOptions; 
}

export class LiFiServcie implements ISwapservice {
  private readonly _lifi = new LIFI();
  private readonly _chains = [...TESTNETS, ...MAINNET];
  private readonly _ops: any = {
    buyTokenPercentageFee: 0.1,
    affiliateAddress: this._feeRecipient,
    feeRecipient: this._feeRecipient,
  }

  constructor(
    private readonly _apiKey: string,
    private readonly _feeRecipient: string,
  ) {}

  async getPrice(ops: IGetPriceOptions) {
    const routesRequest : IRoutesRequest = {
      fromChainId: ops.fromChainId,
      fromAmount: ops.fromAmount,
      fromTokenAddress: ops.fromTokenAddress,
      toChainId: ops.toChainId|| ops.fromChainId,
      toTokenAddress: ops.toTokenAddress,
      // options: {
      //   integrator: 'hexa',
      //   fee: 0.01
      // }
    };
    const result = await this._lifi.getRoutes(routesRequest)
    const routes = result.routes
    return routes.map((route) => {
      return {
        ...route as any,
        estimatedGasUSD: route.gasCostUSD,
        feeCostsUSD: route.steps.reduce((acc, step) => {
          if (step.estimate.feeCosts) {
            return acc + step?.estimate?.feeCosts?.reduce((acc, feeCost) => {
              // only add feeCost if not included
              if ((feeCost as any).included === false) {
                return acc + Number(feeCost.amountUSD);
              }
              return acc;
            }, 0)||0;
          }
          return acc;
        }, 0)||0,

      } as IGetPriceResponse;
    });
  }

  // async getQuote(ops: IGetQuoteOptions) {
  //   const apiUrl = this._getApiUrl(ops);
  //   if (!ops.buyToken || !ops.sellToken  || !apiUrl ) {
  //     console.log(`[ERROR] {OxServcie} getPrice() - Uncorrect request options call: `, ops);
  //     throw new Error('Uncorrect request options call.');
  //   }    
  //   // replace Goerli ETH with WETH
  //   if (ops.sellToken === 'GTH' && ops.chainId === 5) {
  //     ops.sellToken = 'ETH';
  //   }
  //   // remove seelAmount if buyAmount is set
  //   if (ops.buyAmount) {
  //     delete ops.sellAmount;
  //   }
  //   const url = `${apiUrl}/swap/v1/quote?${stringify({
  //     ...ops,
  //     ...this._ops
  //   })}`;
  //   const res = await fetch(
  //     url,
  //     {
  //       method: 'GET',
  //       headers: this.getHeadersRequest(
  //         ops.chainId === 5 || ops.chainId === 80001
  //       )
  //     }
  //   );
  //   const data: ITXQuote = await res.json();
  //   return data;
  // }

  async getQuote(route: any) {
    return route;
  }

  async swap(provider: ethers.providers.Web3Provider, route: any ): Promise<any> {
    console.log('[INFO] {OxServcie} swap() - Trying swap: ', route);
    const signer = provider.getSigner();

    // // connect to correct network
    // const network = await provider.getNetwork();
    // if (network.chainId !== txQuote.fromChainId) {
    //   await provider.send(
    //     "wallet_switchEthereumChain",
    //     [{ chainId: txQuote.fromChainId }]
    //   );
    // }
    // Set Token Allowance

    
    const updatedRoute: Route = await this._lifi.executeRoute(signer, route);
    return {
      ...updatedRoute,
    };
  }

  private getHeadersRequest(isTestnet?: boolean): any {
    // const headers = new Headers();
    // headers.append('0x-api-key', this._apiKey);
    //return headers;
    if (isTestnet) {
      return { }
    }
    return {
      '0x-api-key': this._apiKey
    }
  }

}
