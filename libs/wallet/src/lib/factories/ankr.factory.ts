import { IGetTokensBalances, TokenInterface } from '@hexa/interfaces';

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

/**
 * Method to iinteract with Ankr service API
 * See docs: https://api-docs.ankr.com/reference/introduction
 * @param apiKey 
 * @returns 
 */
export const ankrFactory = (apiKey?: string): IGetTokensBalances => {
  // Name of the blockchain or list of blockchain names.
  // Single: eth.
  // Multiple: [eth, bsc, fantom, avalanche, polygon, arbitrum, syscoin, optimism, eth_goerli, polygon_mumbai, avalanche_fuji].
  // All chains: empty value.
  const CHAIN_AVAILABLES = [
    {
      id: 1,
      value: 'eth',
      name: 'Ethereum',
    },
    {
      id: 56,
      value: 'bsc',
      name: 'Binance smart chain',
    },
    {
      id: 250,
      value: 'fantom',
      name: 'Fantom',
    },
    {
      id: 43114,
      value: 'avalanche',
      name: 'Avalanche',
    },
    {
      id: 137,
      value: 'polygon',
      name: 'Polygon',
    },
    {
      id: 42162,
      value: 'arbitrum',
      name: 'Arbitrum',
    },
    {
      id: 10,
      value: 'optimism',
      name: 'Optimism',
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
  return {
    getTokensBalances: async (chainIds: number[], address: string) => {
      const chainsList =
        chainIds.length <= 0
          ? CHAIN_AVAILABLES
          : CHAIN_AVAILABLES.filter((availableChain) =>
              chainIds.find((c) => c === availableChain.id)
            );
      const blockchain = chainsList.map((c) => c.value)
      const url = 'https://rpc.ankr.com/multichain/?ankr_getAccountBalance';
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
          },
          id: 1,
        }),
      };
      const res = await fetch(url, options);
      const balances = (await res.json())?.result?.assets;
      const formatedBalances: TokenInterface[] = balances?.map(
        (t: IAnkrTokenReponse) => {
          return <TokenInterface>{
            address:
              t.tokenType === 'NATIVE' ? t.tokenSymbol : t.contractAddress,
            name: t.tokenName,
            symbol: t.tokenSymbol,
            logo: t.thumbnail,
            type: t.tokenType,
            decimals: t.tokenDecimals,
            chainId: CHAIN_AVAILABLES.find((c) => c.value === t.blockchain)?.id,
            ownerAddress: address,
            balance: parseFloat(
              (Number(t.balanceRawInteger) / 10 ** t.tokenDecimals).toFixed(4)
            ),
            value: Number(t.balanceUsd),
            rate: Number(t.tokenPrice),
          };
        }
      );
      console.log('[INFO] {ankrFactory} getTokensBalances(): ', { balances });
      return { balances: formatedBalances };
    },
  };
};
