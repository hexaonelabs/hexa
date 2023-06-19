import {
  IGetAvailableTokens,
  IGetTokensBalances,
  TokenInterface,
} from '@hexa/interfaces';

interface IAnkrTokenReponse {
  blockchain: string;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
  tokenType: string;
  holderAddress: string;
  balance: string;
  balanceRawInteger: string;
  balanceUsd: string;
  tokenPrice: string;
  thumbnail: string;
  contractAddress?: string;
}

interface IAnkrCurrencyResponse {
  blockchain: string;
  address: string;
  name: string;
  decimals: number;
  symbol: string;
  thumbnail: string;
}

/**
 * Method to iinteract with Ankr service API
 * See docs: https://api-docs.ankr.com/reference/introduction
 * @param apiKey
 * @returns
 */
export const ankrFactory = (
  apiKey?: string
): IGetTokensBalances & IGetAvailableTokens => {
  // Name of the blockchain or list of blockchain names.
  // Single: eth.
  // Multiple: [eth, bsc, fantom, avalanche, polygon, arbitrum, syscoin, optimism, eth_goerli, polygon_mumbai, avalanche_fuji].
  // All chains: empty value.
  const CHAIN_AVAILABLES = [
    {
      id: 1,
      value: 'eth',
      name: 'Ethereum',
      logo: 'https://www.covalenthq.com/static/images/icons/display-icons/ethereum-eth-logo.png',
      nativeSymbol: 'ETH'
    },
    {
      id: 56,
      value: 'bsc',
      name: 'Binance smart chain',
      logo: 'https://www.covalenthq.com/static/images/icons/display-icons/binance-coin-bnb-logo.png',
      nativeSymbol: 'BNB'
    },
    {
      id: 250,
      value: 'fantom',
      name: 'Fantom',
      logo: "https://www.covalenthq.com/static/images/icons/display-icons/fantom-ftm-logo.png",
      nativeSymbol: 'FTM'
    },
    {
      id: 43114,
      value: 'avalanche',
      name: 'Avalanche',
      logo: "https://www.covalenthq.com/static/images/icons/display-icons/avalanche-avax-logo.png",
      nativeSymbol: 'AVAX'
    },
    {
      id: 137,
      value: 'polygon',
      name: 'Polygon',
      logo: 'https://www.covalenthq.com/static/images/icons/display-icons/polygon-matic-logo.png',
      nativeSymbol: 'MATIC'
    },
    {
      id: 42161,
      value: 'arbitrum',
      name: 'Arbitrum',
      logo: 'https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg',
      nativeSymbol: 'ARB'
    },
    {
      id: 10,
      value: 'optimism',
      name: 'Optimism',
      logo: 'https://gateway.optimism.io/static/media/optimism.caeb9392.svg',
      nativeSymbol: 'ETH'
    },
    {
      id: 5,
      value: 'eth_goerli',
      name: 'Goerli',
    },
    {
      id: 80001,
      value: 'polygon_mumbai',
      name: 'mumbai',
    },
    {
      id: 43113,
      value: 'avalanche_fuji',
      name: 'Fuji',
    },
  ];
  const formatingTokensBalances = (
    tokens: IAnkrTokenReponse[],
    ownerAddress: string,
    chains: {
      id: number;
      value: string;
      name: string;
    }[]
  ) => {
    const balances: TokenInterface[] = tokens?.map((t: IAnkrTokenReponse) => {
      const logo = (t.thumbnail?.length || 0) ? t.thumbnail : undefined;
      return <TokenInterface>{
        address: t.tokenType === 'NATIVE' 
          ? '0x0000000000000000000000000000000000000000' 
          : t.contractAddress,
        name: t.tokenName,
        symbol: t.tokenSymbol,
        type: t.tokenType,
        decimals: t.tokenDecimals,
        logo,
        ownerAddress,
        balance: parseFloat(
          (Number(t.balanceRawInteger) / 10 ** t.tokenDecimals).toFixed(4)
        ),
        value: Number(t.balanceUsd),
        rate: Number(t.tokenPrice),
        chain: {
          ...chains.find((c) => c.value === t.blockchain),
        },
      };
    });
    return { balances };
  };

  return {
    /**
     * Doc url: https://www.ankr.com/docs/app-chains/components/advanced-api/token-methods/#ankr_getaccountbalance
     * @param chainIds array of chain ids
     * @param address wallet address to get balances
     * @returns object with balances property that contains an array of TokenInterface
     */
    getTokensBalances: async (chainIds: number[], address: string) => {
      const chainsList =
        chainIds.length <= 0
          ? CHAIN_AVAILABLES
          : CHAIN_AVAILABLES.filter((availableChain) =>
              chainIds.find((c) => c === availableChain.id)
            );
      const blockchain = chainsList.map((c) => c.value);
      const url = `https://rpc.ankr.com/multichain/${apiKey}`;
      const options: RequestInit = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'ankr_getAccountBalance',
          params: {
            blockchain,
            walletAddress: address,
            onlyWhitelisted: false,
          },
          id: 1,
        }),
      };
      const res = await fetch(url, options);
      const assets = (await res.json())?.result?.assets;
      const balances = formatingTokensBalances(assets, address, chainsList);
      console.log('[INFO] {ankrFactory} getTokensBalances(): ', balances);
      return balances;
    },

    getAvailableTokens: async (chainId: number) => {
      const chain = CHAIN_AVAILABLES.find((c) => c.id === chainId);
      if (!chain) {
        throw new Error(`Chain with ID: '${chainId}' not supported yet.`);
      }
      const url = `https://rpc.ankr.com/multichain/${apiKey}`;
      const options: RequestInit = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          jsonrpc: '2.0',
          method: 'ankr_getCurrencies',
          params: {
            blockchain: chain.value,
          },
          id: 1,
        }),
      };
      const res = await fetch(url, options);
      const currencies: IAnkrCurrencyResponse[] =
        (await res.json())?.result?.currencies || [];
      const tokens = currencies
        .filter((t) => t.thumbnail?.length > 0)
        .filter((t) => t.address?.length > 0)
        .filter((t) => t.symbol?.length > 0)
        .map((t) => {
          return <Partial<TokenInterface>>{
            ...t,
            logo: t.thumbnail,
            chain: {
              ...chain
            },
          };
        });
      // add native token
      tokens.push(<Partial<TokenInterface>>{
        address: '0x0000000000000000000000000000000000000000',
        name: chain.name,
        symbol: chain.nativeSymbol,
        chain,
        logo: chain.logo,
        decimals: 18,
        type: 'NATIVE'
      })
      return { tokens };
    },
  };
};
