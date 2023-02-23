export const environment = {
  version: process.env['NG_APP_VERSION'],
  production: true,
  defaultChain: 'ethereum',
  ipfs: {
    pinning_service_token: process.env['NG_APP_PINNING_JWT'],
    pinning_service_endpoint: process.env['NG_APP_PINNING_ENDPOINT'],
    unpinning_service_endpoint: process.env['NG_APP_UNPINNING_ENDPOINT'],
    api_endpoint: process.env['NG_APP_IPFS_API_ENDPOINT'],
  },
  wallet_service_apikey: process.env['NG_APP_WALLET_SERVICE_APIKEY'],
  availableChainsId: {
    // ETH
    '1': 'ethereum', // mainnet
    // '3': 'ropsten',
    // '4': 'rinkeby',
    // POLYGON
    // '89': 'polygon', // mainnet
    // '13881': 'mumbai',
    // BNB
    // '38': 'binance smart chain', // mainnet
    // '61': 'binance smart chain testnet',
  }
};