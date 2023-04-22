import { TokenInterface } from '@hexa/interfaces';
import { Alchemy, Network } from 'alchemy-sdk';

export const alchemyFactory = (apiKey?: string) => {
  if (!apiKey) {
    throw new Error('No wallet service api key provided');
  }
  // TODO: implement network selection strategy to use correct configuration
  const config = {
    apiKey,
    network: Network.MATIC_MUMBAI,
  };
  const alchemy = new Alchemy(config);
  return {
    getTokensBalances: async (chainId: string, address: string) => {
      const nativeBalance = await alchemy.core.getBalance(address, "latest");
      const result = await alchemy.core.getTokenBalances(address);
      console.log('XXXXXX>', {result, nativeBalance});
      
      // Remove tokens with zero balance
      const nonZeroBalances = result.tokenBalances.filter((token) => {
        return token.tokenBalance !== "0";
      });
      // Loop through all tokens with non-zero balance
      const formatedBalances = await Promise.all(
        nonZeroBalances.map(async (token) => {
          const metadata = await alchemy.core.getTokenMetadata(token.contractAddress);
          const decimals = metadata.decimals||18;
          // Print name, balance, and symbol of token
          let balance = Number(token.tokenBalance);
          // Compute token balance in human-readable format
          balance = balance / Math.pow(10, decimals);
          balance = Number(balance.toFixed(2));
          return <TokenInterface>{
            address: token.contractAddress,
            balance,
            decimals,
            name: metadata.name,
            logo: metadata.logo,
            symbol: metadata.symbol,
            chainId: Number(chainId),
            ownerAddress: address,
          }
        })
      );
      return { balances: formatedBalances };
    },
  };
};