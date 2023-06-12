import { Component, OnInit } from '@angular/core';
import { ethers, BigNumber, providers } from 'ethers';
import {
  UiPoolDataProvider,
  UiIncentiveDataProvider,
  ChainId,
  EthereumTransactionTypeExtended,
  Pool,
  tEthereumAddress,
  InterestRate,
  ReserveDataHumanized,
} from '@aave/contract-helpers';
import * as markets from '@bgd-labs/aave-address-book';
import { ComputedUserReserve, formatReserves, formatReservesAndIncentives, FormatReserveUSDResponse, formatUserSummary } from '@aave/math-utils';
import { BehaviorSubject } from 'rxjs';
// import Web3 from 'web3';
import ERC20_ABI from './ERC20.json';
import lendingPoolABI from './Pool.json';
import { splitSignature } from 'ethers/lib/utils';
const MARKET = markets.AaveV3Mumbai;

// const web3 = new Web3('wss://polygon-testnet.public.blastapi.io');

// Sample RPC address for querying ETH mainnet
const sampleProvider = new ethers.providers.JsonRpcProvider(
  // 'https://api.avax-test.network/ext/bc/C/rpc'
  // 'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc',
  'https://polygon-testnet.public.blastapi.io' 
  // 'https://eth-mainnet.public.blastapi.io',
);

// User address to fetch data for, insert address here
// const currentAccount = '';

// View contract used to fetch all reserves data (including market base currency data), and user reserves
// Using Aave V3 Eth Mainnet address for demo
const poolDataProviderContract = new UiPoolDataProvider({
  uiPoolDataProviderAddress: MARKET.UI_POOL_DATA_PROVIDER,
  provider: sampleProvider,
  chainId: ChainId.mumbai,
});

console.log('poolDataProviderContract: ', poolDataProviderContract);

// View contract used to fetch all reserve incentives (APRs), and user incentives
// Using Aave V3 Eth Mainnet address for demo
const incentiveDataProviderContract = new UiIncentiveDataProvider({
  uiIncentiveDataProviderAddress: MARKET.UI_INCENTIVE_DATA_PROVIDER,
  provider: sampleProvider,
  chainId: ChainId.mumbai,
});
console.log('incentiveDataProviderContract: ',incentiveDataProviderContract);


@Component({
  selector: 'hexa-aave',
  template: `
    <ion-content>
    <ion-card>
      <ion-list *ngIf="(userSummary$|async) as userSummary">
        <ion-item *ngFor="let pool of userSummary?.userReservesData" (click)="actions('check', pool)">
          <ion-label>
            <h2>
              {{pool?.reserve?.symbol}} <small>{{(pool?.reserve.supplyAPY*100)|number}}% APY</small>
            </h2>
            <p>
              Supply balance: {{pool?.scaledATokenBalance||0}} <br/>
              Borrow balance: {{pool?.scaledVariableDebt||0}} <br/>
          </ion-label>
          <ion-button slot="end" (click)="actions('supply', pool)">
            supply
          </ion-button>
          <ion-button slot="end" (click)="actions('borrow', pool)">
            borrow
          </ion-button>
          <ion-button slot="end" (click)="actions('stake', pool)">
            stake
          </ion-button>
        </ion-item>
      </ion-list>
    </ion-card>

      <ion-card>
        <ion-list *ngIf="(formattedPoolReserves$|async) as formattedPoolReserves">
          <ion-item *ngFor="let pool of formattedPoolReserves" (click)="actions('check', pool)">
            <ion-label>
              <h2>
                {{pool?.symbol}} <small>{{pool.supplyAPY|number}}% APY</small>
              </h2>

            </ion-label>
      
          </ion-item>
        </ion-list>
      </ion-card>
    </ion-content>
  `,
})
export class AAVEComponent implements OnInit {
  private readonly ethersProvider = new ethers.providers.Web3Provider(
    (window as any)?.ethereum,
    'any'
  ); 
  public readonly userSummary$ = new BehaviorSubject(null as any);  
  public readonly formattedPoolReserves$ = new BehaviorSubject(null as any);
  public readonly formattedPoolReservesAndIncentives$ = new BehaviorSubject(null as any);

  async ngOnInit() {
    await this.fetchContractData();
  }

  async actions(type: string, payload: any) {
    console.log({type, payload});
    switch(true) {
      case type === 'supply': {
        const {reserve} = payload as ComputedUserReserve<ReserveDataHumanized & FormatReserveUSDResponse>;
        // get amount
        const amount = 1;
        // call method
        const txs = await this.supplyWithPermit(
          {
            provider: this.ethersProvider,
            reserve,
            amount: amount.toString(),
            onBehalfOf: undefined,
            poolAddress: MARKET.POOL,
            gatewayAddress: MARKET.WETH_GATEWAY
          }
        );
        console.log('txs: ', txs); 
        break;
      }
      case type === 'borrow': {
        const {reserve} = payload as ComputedUserReserve<ReserveDataHumanized & FormatReserveUSDResponse>;
        // get amount
        const amount = 1;
        // call method
        this.borrow({
          provider: this.ethersProvider,
          reserve,
          amount: amount.toString(),
          debtTokenAddress: reserve.variableDebtTokenAddress,
          onBehalfOf: undefined,
          poolAddress: MARKET.POOL,
          gatewayAddress: MARKET.WETH_GATEWAY,
        }); 
        break;
      }
    }
  }

  async fetchContractData() {
    const signer = this.ethersProvider.getSigner();
    const currentAccount = await signer.getAddress();
    // Object containing array of pool reserves and market base currency data
    // { reservesArray, baseCurrencyData }
    const reserves = await poolDataProviderContract.getReservesHumanized({
      lendingPoolAddressProvider: MARKET.POOL_ADDRESSES_PROVIDER,
    });
    console.log('reserves', reserves);
    
    // Object containing array or users aave positions and active eMode category
    // { userReserves, userEmodeCategoryId }
    const userReserves = await poolDataProviderContract.getUserReservesHumanized({
      lendingPoolAddressProvider: MARKET.POOL_ADDRESSES_PROVIDER,
      user: currentAccount,
    });
  
    // Array of incentive tokens with price feed and emission APR
    const reserveIncentives =
      await incentiveDataProviderContract.getReservesIncentivesDataHumanized({
        lendingPoolAddressProvider: MARKET.POOL_ADDRESSES_PROVIDER,
      });
  
    // Dictionary of claimable user incentives
    const userIncentives =
      await incentiveDataProviderContract.getUserReservesIncentivesDataHumanized({
        lendingPoolAddressProvider: MARKET.POOL_ADDRESSES_PROVIDER,
        user: currentAccount,
      });
  
    console.log({ reserves, userReserves, reserveIncentives, userIncentives });
    
    const reservesArray = reserves.reservesData;
    const baseCurrencyData = reserves.baseCurrencyData;
    const currentTimestamp = Date.now();

    const formattedPoolReserves = formatReserves({
      reserves: reservesArray,
      currentTimestamp,
      marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
      marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
    });
    this.formattedPoolReserves$.next(formattedPoolReserves);

    const formattedPoolReservesAndIncentives = formatReservesAndIncentives({
      reserves: reservesArray,
      currentTimestamp,
      marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
      marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
      reserveIncentives,
    });
    this.formattedPoolReservesAndIncentives$.next(formattedPoolReservesAndIncentives);

    console.log({formattedPoolReserves, formattedPoolReservesAndIncentives});

    const userSummary = formatUserSummary({
      currentTimestamp,
      marketReferencePriceInUsd: baseCurrencyData.marketReferenceCurrencyPriceInUsd,
      marketReferenceCurrencyDecimals: baseCurrencyData.marketReferenceCurrencyDecimals,
      userReserves: userReserves.userReserves,
      formattedReserves: formattedPoolReserves,
      userEmodeCategoryId: userReserves.userEmodeCategoryId,
    });

    console.log(`userSummary: `, {userSummary});
    this.userSummary$.next(userSummary);
  }

  async supply(
    ops: {
      provider: providers.Web3Provider, 
      reserve: ReserveDataHumanized,
      amount: string, 
      onBehalfOf?: string,
      poolAddress: string, 
      gatewayAddress: string
    }) {
    const {
      provider,
      reserve,
      amount,
      onBehalfOf
    } = ops;
    
    const tokenAdress = reserve.underlyingAsset;
    const signer = provider.getSigner();
    const user = await signer?.getAddress();

    //Contracts
    const tokenContract = new ethers.Contract(tokenAdress, ERC20_ABI, signer);
    const poolContract = new ethers.Contract(MARKET.POOL, lendingPoolABI, signer);

    const approveTx = await (tokenContract).functions['approve'](MARKET.POOL, amount);
    try {
        await approveTx.wait();
        console.log(`Transaction mined succesfully: ${approveTx.hash}`)
    }
    catch (error) {
        console.log(`Transaction failed with error: ${error}`)
    }
    
    const supplyTx = await (poolContract).functions['supply'](
      tokenAdress, amount , onBehalfOf||user, "0"
    );
    try {
        await supplyTx.wait();
        console.log(`Transaction mined succesfully: ${supplyTx.hash}`)
    }
    catch (error) {
        console.log(`Transaction failed with error: ${error}`)
    }

    return [approveTx, supplyTx];
  }

  async supplyWithPermit(
    ops: {
      provider: providers.Web3Provider, 
      reserve: ReserveDataHumanized,
      amount: string, 
      onBehalfOf?: string,
      poolAddress: string, 
      gatewayAddress: string,
    }) {

    const {
      provider,
      reserve,
      amount,
      onBehalfOf,
      poolAddress,
      gatewayAddress
    } = ops;

    const pool = new Pool(provider, {
      POOL: poolAddress,
      WETH_GATEWAY: gatewayAddress,
    });

    const signer = provider.getSigner();
    const currentAccount = await signer?.getAddress();
    const tokenAdress = reserve.underlyingAsset;
    const deadline =  `${Date.now() + (3600 * 50)}`; ;
    let dataToSign = undefined;
    let signature = undefined;

    //Contracts
    const poolContract = new ethers.Contract(MARKET.POOL, lendingPoolABI, signer);

    // request signature
    try {
      dataToSign = await pool.signERC20Approval({
        user: currentAccount,
        reserve: tokenAdress,
        amount, // use simple amount, withouth decimals formating
        deadline,
      });
    } catch (error) {
      throw new Error('unable to sign')
    }
    console.log('dataToSign: ',dataToSign);

    if (dataToSign.length > 0) {
      signature = await provider.send('eth_signTypedData_v4', [
        currentAccount,
        dataToSign,
      ]);
    };

    // formmating signature
    const sig = splitSignature(signature);
    console.log('sig: ', sig);
    
    // call supplyWithPermit
    const supplyTx = await (poolContract).functions['supplyWithPermit'](
      tokenAdress,  `${+(amount) * Math.pow(10, reserve.decimals)}` , onBehalfOf||currentAccount, "0", deadline,  sig.v, sig.r, sig.s 
    );
    console.log('supplyTx: ', supplyTx);
    try {
        await supplyTx.wait();
        console.log(`Transaction mined succesfully: ${supplyTx.hash}`)
    }
    catch (error) {
        console.log(`Transaction failed with error: ${error}`)
    }

    // const txs: EthereumTransactionTypeExtended[] = await pool.supplyWithPermit({
    //   user: currentAccount,
    //   reserve: tokenAdress,
    //   amount: `${+(amount) * Math.pow(10, reserve.decimals)}`,
    //   onBehalfOf: onBehalfOf || currentAccount,
    //   deadline,
    //   signature,
    //   referralCode: '0'
    // });
    // for (let i = 0; i < txs.length; i++) {
    //   const tx = txs[i];
    //   const txResult = await this.submitTransaction(this.ethersProvider, tx);
    //   console.log('txResult: ', txResult);
    // }
  }

  async withdraw(
    provider: providers.Web3Provider, 
    reserve: tEthereumAddress,
    amount: string, 
    aTokenAddress: string,
    onBehalfOf: string,
    ops?: {poolAddress: string, gatewayAddress: string}
  ) {
    const pool = new Pool(provider, ops?  {
      POOL: ops.poolAddress,
      WETH_GATEWAY: ops.gatewayAddress,
    } : undefined);
    const user = await provider.getSigner().getAddress();
    
    /*
    - @param `user` The ethereum address that will make the deposit 
    - @param `reserve` The ethereum address of the reserve 
    - @param `amount` The amount to be deposited 
    - @param `aTokenAddress` The aToken to redeem for underlying asset
    - @param @optional `onBehalfOf` The ethereum address for which user is depositing. It will default to the user address
    */
    const txs: EthereumTransactionTypeExtended[] = await pool.withdraw({
      user,
      reserve,
      amount,
      aTokenAddress,
      onBehalfOf,
    });
    return txs;
  }

  async borrow(
    ops: {
      provider: providers.Web3Provider, 
      reserve: ReserveDataHumanized,
      amount: string, 
      debtTokenAddress: string,
      onBehalfOf?: string,
      interestRateMode?: InterestRate.Variable,
      poolAddress: string, 
      gatewayAddress: string,
    }
  ) {
    const {
      provider,
      reserve,
      amount,
      onBehalfOf,
      debtTokenAddress,
      poolAddress,
      gatewayAddress
    } = ops;

    const pool = new Pool(provider, {
      POOL: poolAddress,
      WETH_GATEWAY: gatewayAddress,
    });
    const signer = provider.getSigner();
    const currentAccount = await signer?.getAddress();
    const tokenAdress = reserve.underlyingAsset;

    /*
    - @param `user` The ethereum address that repays 
    - @param `reserve` The ethereum address of the reserve on which the user borrowed
    - @param `amount` The amount to repay, or (-1) if the user wants to repay everything
    - @param `interestRateMode` // Whether the borrow will incur a stable (InterestRate.Stable) or variable (InterestRate.Variable) interest rate
    - @param @optional `onBehalfOf` The ethereum address for which user is repaying. It will default to the user address
    */
    const txs: EthereumTransactionTypeExtended[] = await pool.borrow({
      user: currentAccount,
      reserve: tokenAdress,
      amount,
      interestRateMode: InterestRate.Variable,
      onBehalfOf,
      debtTokenAddress,
      referralCode: '0'
    });
   for (let i = 0; i < txs.length; i++) {
      const tx = txs[i];
      const txResult = await this.submitTransaction(this.ethersProvider, tx);
      console.log('txResult: ', txResult);
    }
  }

  async repay(
    provider: providers.Web3Provider, 
    reserve: tEthereumAddress,
    amount: string, 
    interestRateMode = InterestRate.Variable,
    onBehalfOf: string,
    ops?: {poolAddress: string, gatewayAddress: string}
  ) {
    const pool = new Pool(provider, ops?  {
      POOL: ops.poolAddress,
      WETH_GATEWAY: ops.gatewayAddress,
    } : undefined);

    const user = await provider.getSigner().getAddress();

    /*
    - @param `user` The ethereum address that will make the deposit 
    - @param `reserve` The ethereum address of the reserve 
    - @param `amount` The amount to be deposited 
    - @param `interestRateMode` // Whether stable (InterestRate.Stable) or variable (InterestRate.Variable) debt will be repaid
    - @param @optional `onBehalfOf` The ethereum address for which user is depositing. It will default to the user address
    */
    const txs: EthereumTransactionTypeExtended[] = await pool.repay({
      user,
      reserve,
      amount,
      interestRateMode,
      onBehalfOf,
    });
    return txs;
  }

  async submitTransaction(
    provider: providers.Web3Provider,  // Signing transactions requires a wallet provider, Aave UI currently uses web3-react (https://github.com/NoahZinsmeister/web3-react) for connecting wallets and accessing the wallet provider
    tx: EthereumTransactionTypeExtended
  ){
    const extendedTxData = await tx.tx();
    const { from, ...txData } = extendedTxData;
    const signer = provider.getSigner(from);
    const value = txData.value ? BigNumber.from(txData.value) : undefined;
    const txResponse = await signer.sendTransaction({
      ...txData,
      value,
      
    });
    return txResponse;
  }

}
