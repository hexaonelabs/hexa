import { TokenInterface } from '../interfaces';
import { IGetTokensBalances, IGetAvailableTokens } from './wallet-utils.interface';

export interface IWalletServcie extends IGetTokensBalances, IGetAvailableTokens {
  getPriceToSwapAsset(ops: any & {
      strategyType?: string;
  }): Promise<{
      buyAmount: number;
      estimatedGas: number;
  }>
}
