import { IGetTokensBalances, TokenInterface } from "@hexa/interfaces";

export const localWalletApiFactory = (): IGetTokensBalances => {
  return {
    getTokensBalances: async (chainIds: number[], address: string) => {
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
          
        ]
        // .filter((t) => t.chainId === parseInt(chainId)),
      };
    },
  };
};
