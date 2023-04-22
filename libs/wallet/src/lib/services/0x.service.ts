import { Injectable } from '@angular/core';
import { BigNumber, ethers } from 'ethers';
import { stringify } from 'qs'
import { MAINNET, TESTNETS } from '../constants/chains.constant';
import { erc20abi } from '../constants/erc20abi.constant';
import {
  IGetPriceOptions,
  IGetQuoteOptions,
  ISwapservice,
} from '../interfaces/swap-servcie.interface';
import { ITXQuote } from '../interfaces/tx-quote.interface';


export class OxServcie implements ISwapservice {
  private readonly _chains = [...TESTNETS, ...MAINNET];

  constructor(
    private readonly _apiKey: string
  ) {}

  async getPrice(ops: IGetPriceOptions) {
    const apiUrl = this._getApiUrl(ops);
    if (!ops.buyToken || !ops.sellToken || !ops.sellAmount || !apiUrl ) {
      console.log(`[ERROR] {OxServcie} getPrice() - Uncorrect request options call: `, ops);
      throw new Error('Uncorrect request options call.');
    }
    // Fetch the swap price.
    const response = await fetch(
      `${apiUrl}/swap/v1/price?${stringify(ops)}`,
      {
        method: 'GET',
        headers: this.getHeadersRequest()
      }
    );
    const {buyAmount = undefined, estimatedGas = undefined, ...result} = await response.json();
    console.log("[INFO] {{0xService}} getPrice(): ", {buyAmount, estimatedGas, result});
    return {
      buyAmount, 
      estimatedGas, 
      result,
    }
  }

  async getQuote(ops: IGetQuoteOptions) {
    const apiUrl = this._getApiUrl(ops);
    if (!ops.buyToken || !ops.sellToken || !ops.sellAmount || !apiUrl ) {
      console.log(`[ERROR] {OxServcie} getPrice() - Uncorrect request options call: `, ops);
      throw new Error('Uncorrect request options call.');
    }
    const url = `${apiUrl}/swap/v1/quote?${stringify(ops)}`;
    const res = await fetch(
      url,
      {
        method: 'GET',
        headers: this.getHeadersRequest()
      }
    );
    const data: ITXQuote = await res.json();
    return data;
  }

  async swap(provider: ethers.providers.Web3Provider, txQuote: ITXQuote, ) {
    console.log('[INFO] {OxServcie} swap() - Trying swap: ', txQuote);
    // Set Token Allowance
    // Set up approval amount
    const fromTokenAddress = txQuote.sellTokenAddress;
    const maxApproval = BigNumber.from(1).pow(256);
    console.log('[INFO] {OxServcie} swap() - approval amount: ', maxApproval);
    const signer = provider.getSigner();
    const address = signer.getAddress();


    
    const ERC20TokenContract = new ethers.Contract(
      fromTokenAddress,
      erc20abi,
      signer
    );
    console.log('>>>>', ERC20TokenContract);
    // Set up allowance on the 0x contract if needed.
    const bn = (ERC20TokenContract as any).allowance(address, fromTokenAddress).call();
    const currentAllowance = BigNumber.from(bn);
    if (currentAllowance.lt(txQuote.sellAmount)) {
      console.log('>> approvation>>>> ');
      
      const approveTx = await (ERC20TokenContract as any).approve(fromTokenAddress, txQuote.sellAmount, {gasPrice: await provider.getGasPrice()});
      try {
          await approveTx.wait();
          console.log(`Transaction mined succesfully: ${approveTx.hash}`)
      }
      catch (error) {
          console.log(`Transaction failed with error: ${error}`)
      }
    }




    // TODO: add token amount allowence
    // // Grant the allowance target an allowance to spend our tokens.
    // const preTx: ethers.providers.TransactionResponse = await (ERC20TokenContract as any).approve(txQuote.allowanceTarget, maxApproval);
    // // wait for the transaction to be mined
    // const aprevedTX = await preTx.wait();
    // // console.log('>>>>', tx, aprevedTX);
    
    // Perform the swap
    const tx = await provider.getSigner().sendTransaction({
      from: address,
      to: txQuote.to,
      data: txQuote.data,
      value: txQuote.value,
      gasLimit: txQuote.estimatedGas
    });
    const receipt = await tx.wait();
    return receipt;
  }

  private getHeadersRequest() {
    const headers = new Headers();
    headers.append('0x-api-key', this._apiKey);
    return headers;
    // return {
    //   '0x-api-key': this._apiKey
    // }
  }

  private _getApiUrl(ops?: Pick<IGetQuoteOptions, 'chainId'>) {
    const apiUrl = this._chains.find(
      (c) => c.chainId === ops?.chainId
    )?.url||undefined;
    if (!apiUrl) {
      throw new Error(`Unexisting chain ID params.`);
    }
    return apiUrl;
  }

}
