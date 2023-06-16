// import { BigNumber, ethers } from 'ethers';
// import { stringify } from 'qs'
// import { MAINNET, TESTNETS } from '../constants/chains.constant';
// import { erc20abi } from '../constants/erc20abi.constant';
// import {
//   IGetPriceOptions,
//   IGetPriceResponse,
//   IGetQuoteOptions,
//   ISwapservice,
// } from '../interfaces/swap-servcie.interface';
// import { ITXRequest } from '../interfaces/tx.interface';


// export class OxServcie implements ISwapservice {
//   private readonly _chains = [...TESTNETS, ...MAINNET];
//   private readonly _ops: any = {
//     buyTokenPercentageFee: 0.1,
//     affiliateAddress: this._feeRecipient,
//     feeRecipient: this._feeRecipient,
//   }

//   constructor(
//     private readonly _apiKey: string,
//     private readonly _feeRecipient: string,
//   ) {}

//   async getPrice(ops: IGetPriceOptions) {
//     const apiUrl = this._getApiUrl(ops);
//     if (!ops.toToken || !ops.fromToken || !ops.fromAmount || !apiUrl ) {
//       console.log(`[ERROR] {OxServcie} getPrice() - Uncorrect request options call: `, ops);
//       throw new Error('Uncorrect request options call.');
//     }
//     // replace Goerli ETH with WETH
//     if (ops.fromToken === 'GTH' && ops.fromChainId === 5) {
//       ops.fromToken = 'ETH';
//     }
//     // Fetch the swap price.
//     const response = await fetch(
//       `${apiUrl}/swap/v1/price?${stringify({
//         ...ops,
//         ...this._ops
//       })}`,
//       {
//         method: 'GET',
//         headers: this.getHeadersRequest(
//           ops.fromChainId === 5 || ops.fromChainId === 80001 
//         )
//       }
//     );
//     const {buyAmount = undefined, estimatedGas = undefined, ...result} = await response.json();
//     console.log("[INFO] {{0xService}} getPrice(): ", {buyAmount, estimatedGas, result});
//     // return {
//     //   buyAmount, 
//     //   estimatedGas, 
//     //   result,
//     // }
//     return [<IGetPriceResponse>{
//       fee: estimatedGas,
//       fromAmount: ops.fromAmount,
//     }];
//   }

//   async getQuote(ops: IGetQuoteOptions) {
//     const apiUrl = this._getApiUrl(ops);
//     if (!ops.fromToken || !ops.toToken  || !apiUrl ) {
//       console.log(`[ERROR] {OxServcie} getPrice() - Uncorrect request options call: `, ops);
//       throw new Error('Uncorrect request options call.');
//     }    
//     // replace Goerli ETH with WETH
//     if (ops.fromToken === 'GTH' && ops.fromChainId === 5) {
//       ops.fromToken = 'ETH';
//     }
//     // // remove seelAmount if buyAmount is set
//     // if (ops.toAmount) {
//     //   delete ops.fromAmount;
//     // }
//     const url = `${apiUrl}/swap/v1/quote?${stringify({
//       ...ops,
//       ...this._ops
//     })}`;
//     const res = await fetch(
//       url,
//       {
//         method: 'GET',
//         headers: this.getHeadersRequest(
//           ops.fromChainId === 5 || ops.fromChainId === 80001
//         )
//       }
//     );
//     const data: ITXRequest = await res.json();
//     return data;
//   }

//   async swap(provider: ethers.providers.Web3Provider, txQuote: ITXRequest, ) {
//     console.log('[INFO] {OxServcie} swap() - Trying swap: ', txQuote);
//     // // connect to correct network
//     // const network = await provider.getNetwork();
//     // if (network.chainId !== txQuote.chainId) {
//     //   await provider.send(
//     //     "wallet_switchEthereumChain",
//     //     [{ chainId: txQuote.chainId }]
//     //   );
//     // }
//     // Set Token Allowance
//     // Set up approval amount
//     const fromTokenAddress = txQuote.from;
//     const maxApproval = BigNumber.from(1).pow(256);
//     console.log('[INFO] {OxServcie} swap() - approval amount: ', maxApproval);
//     const signer = provider.getSigner();
//     const address = signer.getAddress();

//     const ERC20TokenContract = new ethers.Contract(
//       fromTokenAddress,
//       erc20abi,
//       signer
//     );
//     console.log('>>>>', {ERC20TokenContract, signer});
//     // // Set up allowance on the 0x contract if needed.
//     // const currentAllowance: BigNumber = await  (ERC20TokenContract as any).allowance(fromTokenAddress, address).catch((e: Error) => e.message);//.call();
//     // console.log('bn: ', currentAllowance, );
    
//     // if (currentAllowance.lt(txQuote.sellAmount)) {
//     //   console.log('>> approvation>>>> ');
      
//     //   const approveTx = await (ERC20TokenContract as any).approve(fromTokenAddress, txQuote.sellAmount, {gasPrice: await provider.getGasPrice()});
//     //   try {
//     //       await approveTx.wait();
//     //       console.log(`Transaction mined succesfully: ${approveTx.hash}`)
//     //   }
//     //   catch (error) {
//     //       console.log(`Transaction failed with error: ${error}`)
//     //   }
//     // }




//     // TODO: add token amount allowence
//     // Grant the allowance target an allowance to spend our tokens.
//     // const approveTx: ethers.providers.TransactionResponse = await (ERC20TokenContract as any).approve(
//     //   txQuote.allowanceTarget, 
//     //   txQuote.sellAmount, 
//     //   {gasLimit: txQuote.estimatedGas}
//     // );
//     // // wait for the transaction to be mined
//     // await approveTx.wait();
//     // // console.log('>>>>', tx, aprevedTX);
    
//     // Perform the swap
//     const tx = await signer.sendTransaction({
//       from: address,
//       to: txQuote.to,
//       data: txQuote.data,
//       value: txQuote.value,
//       // gasLimit: txQuote.estimatedGas
//     });
//     const receipt = await tx.wait();
//     return receipt;
//   }

//   private getHeadersRequest(isTestnet?: boolean): any {
//     // const headers = new Headers();
//     // headers.append('0x-api-key', this._apiKey);
//     //return headers;
//     if (isTestnet) {
//       return { }
//     }
//     return {
//       '0x-api-key': this._apiKey
//     }
//   }

//   private _getApiUrl(ops?: Pick<IGetQuoteOptions, 'fromChainId'>) {
//     const apiUrl = this._chains.find(
//       (c) => c.chainId === ops?.fromChainId
//     )?.url||undefined;
//     if (!apiUrl) {
//       throw new Error(`Unexisting chain ID params.`);
//     }
//     return apiUrl;
//   }

// }
