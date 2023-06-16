import { TokenInterface } from '../interfaces';
import { IGetTokensBalances, IGetAvailableTokens, ISendAsset } from './wallet-utils.interface';

export interface IWalletServcie extends IGetTokensBalances, IGetAvailableTokens, ISendAsset {
  // getPriceToSwapAsset(ops: any & {
  //     strategyType?: string;
  // }): Promise<T[]>
}
