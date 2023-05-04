import {
  Pool,
  ReserveDataHumanized,
  ReservesDataHumanized,
  ReservesIncentiveDataHumanized,
  UiIncentiveDataProvider,
  UiPoolDataProvider,
  UserReserveDataHumanized,
  GetUserStakeUIDataHumanized,
  UserRewardInfoHumanized,
  GetUserStakeUIData,
  UserReserveData,
  UserWalletBalancesResponse,
  WalletBalanceProviderContext,
  WalletBalanceProvider,
} from '@aave/contract-helpers';
import { Injectable } from '@angular/core';
import { ethers, providers } from 'ethers';
import { splitSignature } from 'ethers/lib/utils';
import * as MARKETS from '@bgd-labs/aave-address-book';
import { BehaviorSubject } from 'rxjs';
import {
  FormatReserveUSDResponse,
  formatReserves,
  formatReservesAndIncentives,
  formatUserSummary,
} from '@aave/math-utils';

type MARKETTYPE =
  | typeof MARKETS.AaveV3Ethereum
  | typeof MARKETS.AaveV3Goerli
  | typeof MARKETS.AaveV3Polygon
  | typeof MARKETS.AaveV3Mumbai
  | typeof MARKETS.AaveV3Fuji
  | typeof MARKETS.AaveV3Avalanche
  | typeof MARKETS.AaveV3Arbitrum
  | typeof MARKETS.AaveV3ArbitrumGoerli
  | typeof MARKETS.AaveV3Optimism
  | typeof MARKETS.AaveV3ArbitrumGoerli;

@Injectable()
export class AAVEService {
  // // Sample RPC address for querying ETH mainnet
  // private readonly _sampleProvider = new ethers.providers.JsonRpcProvider(
  //   // 'https://api.avax-test.network/ext/bc/C/rpc'
  //   // 'https://ava-testnet.public.blastapi.io/ext/bc/C/rpc',
  //   'https://polygon-testnet.public.blastapi.io'
  //   // 'https://eth-mainnet.public.blastapi.io',
  // );

  public readonly markets$: BehaviorSubject<MARKETTYPE> =
    new BehaviorSubject<MARKETTYPE>(null as any);
  public readonly userSummary$ = new BehaviorSubject(null as any);
  public readonly formattedPoolReserves$: BehaviorSubject<
    (ReserveDataHumanized & FormatReserveUSDResponse)[]
  > = new BehaviorSubject(null as any);
  public readonly formattedPoolReservesAndIncentives$ = new BehaviorSubject(
    null as any
  );
  public formatedWalletBallance$: BehaviorSubject<
    (ReserveDataHumanized & { balance: string; tokenAddress: string })[]
  > = new BehaviorSubject(null as any);

  async loadData(provider: providers.Web3Provider) {
    const signer = provider.getSigner();
    const currentAccount = await signer.getAddress();
    const { chainId } = await provider.getNetwork();
    const market = this._getMarkets(chainId);
    this.markets$.next(market);

    // View contract used to fetch all reserves data (including market base currency data), and user reserves
    // Using Aave V3 Eth Mainnet address for demo
    const poolDataProviderContract = new UiPoolDataProvider({
      uiPoolDataProviderAddress: market.UI_POOL_DATA_PROVIDER,
      provider, //: sampleProvider,
      chainId: chainId,
    });
    // console.log('poolDataProviderContract: ', poolDataProviderContract);

    // View contract used to fetch all reserve incentives (APRs), and user incentives
    // Using Aave V3 Eth Mainnet address for demo
    const incentiveDataProviderContract = new UiIncentiveDataProvider({
      uiIncentiveDataProviderAddress: market.UI_INCENTIVE_DATA_PROVIDER,
      provider, //: sampleProvider,
      chainId, // : ChainId.mumbai,
    });
    // console.log(
    //   'incentiveDataProviderContract: ',
    //   incentiveDataProviderContract
    // );

    // Object containing array of pool reserves and market base currency data
    // { reservesArray, baseCurrencyData }
    const reserves = await poolDataProviderContract.getReservesHumanized({
      lendingPoolAddressProvider: market.POOL_ADDRESSES_PROVIDER,
    });
    console.log('[INFO] {{AAVEService}} reserves: ', reserves);

    // Object containing array or users aave positions and active eMode category
    // { userReserves, userEmodeCategoryId }
    const userReserves =
      await poolDataProviderContract.getUserReservesHumanized({
        lendingPoolAddressProvider: market.POOL_ADDRESSES_PROVIDER,
        user: currentAccount,
      });
    console.log('[INFO] {{AAVEService}} userReserves', userReserves);

    // Array of incentive tokens with price feed and emission APR
    const reserveIncentives =
      await incentiveDataProviderContract.getReservesIncentivesDataHumanized({
        lendingPoolAddressProvider: market.POOL_ADDRESSES_PROVIDER,
      });
    //console.log('reserveIncentives', reserveIncentives);

    // Dictionary of claimable user incentives
    const userIncentives =
      await incentiveDataProviderContract.getUserReservesIncentivesDataHumanized(
        {
          lendingPoolAddressProvider: market.POOL_ADDRESSES_PROVIDER,
          user: currentAccount,
        }
      );
    // console.log({ userIncentives });

    const reservesArray = reserves.reservesData;
    const baseCurrencyData = reserves.baseCurrencyData;
    const currentTimestamp = Date.now();

    const formattedPoolReserves = formatReserves({
      reserves: reservesArray,
      currentTimestamp,
      marketReferenceCurrencyDecimals:
        baseCurrencyData.marketReferenceCurrencyDecimals,
      marketReferencePriceInUsd:
        baseCurrencyData.marketReferenceCurrencyPriceInUsd,
    });
    this.formattedPoolReserves$.next(formattedPoolReserves);

    const formattedPoolReservesAndIncentives = formatReservesAndIncentives({
      reserves: reservesArray,
      currentTimestamp,
      marketReferenceCurrencyDecimals:
        baseCurrencyData.marketReferenceCurrencyDecimals,
      marketReferencePriceInUsd:
        baseCurrencyData.marketReferenceCurrencyPriceInUsd,
      reserveIncentives,
    });
    this.formattedPoolReservesAndIncentives$.next(
      formattedPoolReservesAndIncentives
    );
    console.log('[INFO] {{AAVEService}} : ', {
      formattedPoolReserves,
      formattedPoolReservesAndIncentives,
    });

    const userSummary = formatUserSummary({
      currentTimestamp,
      marketReferencePriceInUsd:
        baseCurrencyData.marketReferenceCurrencyPriceInUsd,
      marketReferenceCurrencyDecimals:
        baseCurrencyData.marketReferenceCurrencyDecimals,
      userReserves: userReserves.userReserves,
      formattedReserves: formattedPoolReserves,
      userEmodeCategoryId: userReserves.userEmodeCategoryId,
    });

    console.log(`[INFO] {{AAVEService}} userSummary: `, { userSummary });
    this.userSummary$.next(userSummary);

    // Get user wallet balances for all tokens in the lending pool
    const walletBallance = new WalletBalanceProvider({
      provider,
      walletBalanceProviderAddress: market.WALLET_BALANCE_PROVIDER,
    });
    const userWalletDatas =
      await walletBallance.getUserWalletBalancesForLendingPoolProvider(
        currentAccount,
        market.POOL_ADDRESSES_PROVIDER
      );
    // Humanize user wallet array data
    const tokenAddress = userWalletDatas[0];
    const bigNumberValues = userWalletDatas[1];
    const walletbalancesByPools = tokenAddress.map((address, i) => {
      const pool =
        formattedPoolReserves?.find((poolReserve) => {
          return (
            poolReserve.underlyingAsset?.toUpperCase() ===
            address?.toUpperCase()
          );
        }) || ({} as ReserveDataHumanized);
      return {
        ...pool,
        tokenAddress: address,
        tokenBalance: bigNumberValues[i],
        // convert  bigNumberValues[i] to human readable format
        balance: ethers.utils.formatUnits(bigNumberValues[i], pool.decimals),
      };
    });
    console.log(
      '[INFO] {{AAVEService}} walletbalancesByPools: ',
      walletbalancesByPools
    );
    this.formatedWalletBallance$.next(walletbalancesByPools);
  }

  async supply(ops: {
    provider: providers.Web3Provider;
    reserve: ReserveDataHumanized;
    amount: string;
    onBehalfOf?: string;
    poolAddress: string;
    gatewayAddress: string;
  }) {
    const { provider, reserve, amount, onBehalfOf } = ops;

    const tokenAdress = reserve.underlyingAsset;
    const signer = provider.getSigner();
    const user = await signer?.getAddress();
    const MARKET = this.markets$.value;
    const ERC20_ABI = await fetch('/assets/wallet/abi/ERC20.abi.json').then((res) => res.json());
    const lendingPoolABI = await fetch('/assets/wallet/abi/aavePool.abi.json').then((res) => res.json());
    //Contracts
    const tokenContract = new ethers.Contract(tokenAdress, ERC20_ABI, signer);
    const poolContract = new ethers.Contract(
      MARKET.POOL,
      lendingPoolABI,
      signer
    );

    const approveTx = await tokenContract.functions['approve'](
      MARKET.POOL,
      amount
    );
    try {
      await approveTx.wait();
      console.log(`Transaction mined succesfully: ${approveTx.hash}`);
    } catch (error) {
      console.log(`Transaction failed with error: ${error}`);
    }

    const supplyTx = await poolContract.functions['supply'](
      tokenAdress,
      amount,
      onBehalfOf || user,
      '0'
    );
    try {
      await supplyTx.wait();
      console.log(`Transaction mined succesfully: ${supplyTx.hash}`);
    } catch (error) {
      console.log(`Transaction failed with error: ${error}`);
    }

    return [approveTx, supplyTx];
  }

  async supplyWithPermit(ops: {
    provider: providers.Web3Provider;
    reserve: ReserveDataHumanized;
    amount: string;
    onBehalfOf?: string;
    poolAddress: string;
    gatewayAddress: string;
  }) {
    const {
      provider,
      reserve,
      amount,
      onBehalfOf,
      poolAddress,
      gatewayAddress,
    } = ops;

    const pool = new Pool(provider, {
      POOL: poolAddress,
      WETH_GATEWAY: gatewayAddress,
    });
    const MARKET = this.markets$.value;

    const signer = provider.getSigner();
    const currentAccount = await signer?.getAddress();
    const tokenAdress = reserve.underlyingAsset;
    const deadline = `${Date.now() + 3600 * 50}`;
    let dataToSign = undefined;
    let signature = undefined;
    const lendingPoolABI = await fetch('/assets/wallet/abi/aavePool.abi.json').then((res) => res.json());
    
    //Contracts
    const poolContract = new ethers.Contract(
      MARKET.POOL,
      lendingPoolABI,
      signer
    );

    // request signature
    try {
      dataToSign = await pool.signERC20Approval({
        user: currentAccount,
        reserve: tokenAdress,
        amount, // use simple amount, withouth decimals formating
        deadline,
      });
    } catch (error) {
      throw new Error('unable to sign');
    }
    console.log('dataToSign: ', dataToSign);

    if (dataToSign.length > 0) {
      signature = await provider.send('eth_signTypedData_v4', [
        currentAccount,
        dataToSign,
      ]);
    }

    // formmating signature
    const sig = splitSignature(signature);
    console.log('sig: ', sig);

    // call supplyWithPermit
    const supplyTx = await poolContract.functions['supplyWithPermit'](
      tokenAdress,
      `${+amount * Math.pow(10, reserve.decimals)}`,
      onBehalfOf || currentAccount,
      '0',
      deadline,
      sig.v,
      sig.r,
      sig.s
    );
    console.log('supplyTx: ', supplyTx);
    try {
      await supplyTx.wait();
      console.log(`Transaction mined succesfully: ${supplyTx.hash}`);
    } catch (error) {
      console.log(`Transaction failed with error: ${error}`);
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

  private _getMarkets(chainId: number) {
    switch (true) {
      case chainId === 1:
        return MARKETS.AaveV3Ethereum;
      case chainId === 5:
        return MARKETS.AaveV3Goerli;
      case chainId === 137:
        return MARKETS.AaveV3Polygon;
      case chainId === 80001:
        return MARKETS.AaveV3Mumbai;
      case chainId === 43113:
        return MARKETS.AaveV3Fuji;
      case chainId === 42170:
        return MARKETS.AaveV3Arbitrum;
      case chainId === 421613:
        return MARKETS.AaveV3ArbitrumGoerli;
      default:
        throw new Error('ChainId not supported');
    }
  }
}
