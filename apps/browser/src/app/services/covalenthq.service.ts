import { TokenInterface } from '@hexa/interfaces';

export const covalentFactory = (apiKey?: string) => {
  if (!apiKey) {
    throw new Error('No wallet service api key provided');
  }
  return {
    getTokensBalances: async (chainId: string, address: string) => {
      const res = await fetch(
        `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${apiKey}`
      );
      const balances = (await res.json()).data.items;
      const formatedBalances: TokenInterface[] = balances.map((t: any) => {
        return <TokenInterface>{
          address: t.contract_address,
          name: t.contract_name,
          symbol: t.contract_ticker_symbol,
          logo: t.logo_url,
          type: t.type,
          nft_data: t.nft_data,
          decimals: t.contract_decimals,
          balance: parseFloat(
            (t.balance / 10 ** t.contract_decimals).toFixed(4)
          ),
          rate: t.quote_rate,
          rate24h: t.quote_rate_24h,
          value: t.quote ? parseFloat(t.quote.toFixed(2)) : 0,
          chainId: parseInt(chainId),
          // chainLogo: CHAIN_IDS.find(c => c.id === parseInt(chainId))?.logo,
          ownerAddress: address,
        };
      });
      return { balances: formatedBalances };
    },
  };
};

export const localWalletApiFactory = (): {
  getTokensBalances: (
    chainId: string,
    address: string
  ) => Promise<{
    balances: TokenInterface[];
  }>;
} => {
  return {
    getTokensBalances: async (chainId: string, address: string) => {
      return {
        balances: [
          {
            address: '0x6b175474e89094c44da98b954eedeac495271d0f',
            name: 'Dai Stablecoin',
            symbol: 'DAI',
            logo: 'https://assets.coingecko.com/coins/images/9956/large/dai-multi-collateral-mcd.png?1574218774',
            type: 'ERC20',
            nft_data: null,
            decimals: 18,
            balance: 10,
            rate: 1,
            rate24h: 1,
            value: 10,
            chainId: 1,
            ownerAddress: address,
          },
          // {
          //   address: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
          //   name: 'Wrapped BTC',
          //   symbol: 'WBTC',
          //   logo: 'https://assets.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png?1548822744',
          //   type: 'ERC20',
          //   nft_data: null,
          //   decimals: 8,
          //   balance: 10,
          //   rate: 0,
          //   rate24h: 0,
          //   value: 0,
          //   chainId: 1,
          //   ownerAddress: address,
          // },
          // {
          //   address: '0x0d8775f648430679a709e98d2b0cb6250d2887ef',
          //   name: 'Basic Attention Token',
          //   symbol: 'BAT',
          //   logo: 'https://assets.coingecko.com/coins/images/677/large/basic-attention-token.png?1547034426',
          //   type: 'ERC20',
          //   nft_data: null,
          //   decimals: 18,
          //   balance: 10,
          //   rate: 0,
          //   rate24h: 0,
          //   value: 0,
          //   chainId: 1,
          //   ownerAddress: address,
          // },
          // {
          //   address: '0x514910771af9ca656af840dff83e8264ecf986ca',
          //   name: 'Chainlink',
          //   symbol: 'LINK',
          //   logo: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png?1547034700',
          //   type: 'ERC20',
          //   nft_data: null,
          //   decimals: 18,
          //   balance: 10,
          //   rate: 0,
          //   rate24h: 0,
          //   value: 0,
          //   chainId: 1,
          //   ownerAddress: address,
          // },
          
        ].filter((t) => t.chainId === parseInt(chainId)),
      };
    },
  };
};
