import { Injectable } from '@angular/core';
import {
  CHAINS_IDS,
  CHAINS,
  TOKENS,
  TOKENS_BY_NETWORK,
} from '@lido-sdk/constants';
import { getERC20Contract, getSTETHContract } from '@lido-sdk/contracts';
import { BigNumber, ethers } from 'ethers';
import stETHabi from './stETH.abi.json';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LidoService {

  public readonly balance$: BehaviorSubject<number> = new BehaviorSubject<number>(null as any);
  public readonly shares$: BehaviorSubject<number> = new BehaviorSubject<number>(null as any);
  public readonly tokens$: BehaviorSubject<{
    WSTETH?: string | undefined,
    STETH?: string | undefined,
    LDO?: string | undefined
}> = new BehaviorSubject<{
  WSTETH?: string | undefined;
  STETH?: string | undefined;
  LDO?: string | undefined;
}>(null as any);

  async loadData(
    provider: ethers.providers.Web3Provider,
  ) {
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const { chainId } = await provider.getNetwork();
    console.log(`[INFO] {{LidoService}} available chain ids: `,{CHAINS_IDS});
    
    if (!CHAINS_IDS.includes(chainId)) {
      throw new Error(
        'Chain not supported. Please connect to Ethereum mainnet or Goerli testnet.'
      );
    }
    // get token contract from network
    this.tokens$.next((TOKENS_BY_NETWORK as any)[chainId]);
    const { STETH = undefined, WSTETH = undefined } = this.tokens$.value;
    if (!STETH || !WSTETH) {
      throw new Error('Contract address not found.');
    }
    const stETHContract = new ethers.Contract(STETH, stETHabi, signer);
    const [decimals = undefined] =
      (await stETHContract.functions?.['decimals']()) || [];
    const balance: BigNumber = await stETHContract.functions?.['balanceOf'](
      address
    );
    const sharesOf: BigNumber = await stETHContract.functions?.['sharesOf'](
      address
    );
    // use token decimals to format value
    const balanceValueFormatted = ethers.utils.formatUnits(
      balance.toString(),
      decimals
    );
    const sharesOfValueFormatted = ethers.utils.formatUnits(
      sharesOf.toString(),
      decimals
    );
    // console.log({ balanceValueFormatted, sharesOfValueFormatted });
    this.balance$.next(Number(balanceValueFormatted));
    this.shares$.next(Number(sharesOfValueFormatted));
  }

  /**
   * Mmethod to swap ETH to LSToken
   * @param provider
   * @param lsTokenAddress
   * @param amount
   * @returns
   */
  async swapToLSToken(
    provider: ethers.providers.Web3Provider,
    amount: string = '0.0001'
  ) {
    const { chainId } = await provider.getNetwork();
    const { 
      STETH = undefined, 
    } = (TOKENS_BY_NETWORK as any)[chainId];
    const signer = provider.getSigner();
    const sender = await signer.getAddress();
    // send transaction
    const tx = {
      from: sender,
      to: STETH,
      value: ethers.utils.parseEther(amount),
    };
    const receipt = await signer.sendTransaction(tx).then((tx) => tx.wait());
    console.log({ receipt });
    return { receipt };
  }

  /**
   * Mmethod to swap ETH to wstToken
   * @param provider
   * @param wlsTokenAddress
   * @param amount
   * @returns
   */
  async swapToWLSToken(
    provider: ethers.providers.Web3Provider,
    stAmount: string = '0.0001'
  ) {
    const { chainId } = await provider.getNetwork();
    const { 
      WSTETH = undefined 
    } = (TOKENS_BY_NETWORK as any)[chainId];
    const signer = provider.getSigner();
    const sender = await signer.getAddress();
    // send transaction
    const tx = {
      from: sender,
      to: WSTETH,
      value: ethers.utils.parseEther(stAmount),
    };
    const wstETH: any = getERC20Contract(WSTETH, signer);
    wstETH.functions['wrap'](stAmount);
    const receipt = await signer.sendTransaction(tx).then((tx) => tx.wait());
    console.log({ receipt });
    return { receipt };
  }
}
