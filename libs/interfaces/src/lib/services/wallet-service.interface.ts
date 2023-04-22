import { TokenInterface } from '../interfaces';
import { IGetTokensBalances } from './wallet-utils.interface';

export interface IWalletServcie extends IGetTokensBalances {
  getPriceToSwapAsset(ops: any & {
      strategyType?: string;
  }): Promise<{
      buyAmount: number;
      estimatedGas: number;
  }>
}
