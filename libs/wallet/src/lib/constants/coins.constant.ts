import { TokenInterface } from "@hexa/interfaces";

export const COINS = [
  {
    chain: {id: 1},
    symbol: 'ETH',
    address: 'ETH',
    decimals: 18,
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'
  },
  {
    chain: {id: 1},
    symbol: 'USDC',
    address: 'USDC',
    decimals: 18,
    logo: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png'
  },
  {
    chain: {id: 5},
    symbol: 'USDC',
    address: '0x5FfbaC75EFc9547FBc822166feD19B05Cd5890bb', //'0x07865c6e87b9f70255377e024ace6630c1eaa37f',
    decimals: 18,
    logo: 'https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png'
  },
  {
    chain: {id: 5},
    symbol: 'WETH',
    address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    decimals: 18,
    logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png'    
  },
  {
    chain: {id: 5},
    symbol: 'DAI',
    address: '0xE68104D83e647b7c1C15a91a8D8aAD21a51B3B3E',
    decimals: 18,
    logo: 'https://assets.coingecko.com/coins/images/9956/large/4943.png'
  },
  {
    chain: {id: 137},
    symbol: 'USDT',
    address: 'USDT',
    decimals: 18,
    logo: 'https://assets.coingecko.com/coins/images/325/large/Tether.png'
  },
  {
    chain: {id: 137},
    symbol: 'MATIC',
    address: 'MATIC',
    decimals: 18,
  },
  {
    chain: {id: 80001},
    symbol: 'DAI',
    address: '0x001b3b4d0f3714ca98ba10f6042daebf0b1b7b6f',
    decimals: 18,
    logo: 'https://assets.coingecko.com/coins/images/9956/large/4943.png'
  },  
  {
    chain: {id: 80001},
    symbol: 'WMATIC',
    address: '0x9c3c9283d3e44854697cd22d3faa240cfb032889',
    decimals: 18,
  }
  // {
  //   chainId: 'bsc',
  //   symbol: 'BUSD',
  //   address: undefined
  // },
  // {
  //   chainName: 'bsc',
  //   symbol: 'BNB',
  //   address: undefined
  // },
];
