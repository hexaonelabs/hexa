import { TokenInterface } from "@hexa/interfaces";

export const covalentFactory = (apiKey?: string) => {
  if (!apiKey) {
    throw new Error('No wallet service api key provided');
  }
  return {
    getTokensBalances: async (chainId: string, address: string) => {
      const res = await fetch(
          `https://api.covalenthq.com/v1/${chainId}/address/${address}/balances_v2/?quote-currency=USD&format=JSON&nft=true&no-nft-fetch=false&key=${apiKey}`
        );
      const balances = (await res.json())?.data?.items;
      const formatedBalances: TokenInterface[] = balances?.map((t: any) => {
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
      console.log('XXXXXX>', { balances: formatedBalances });
      return { balances: formatedBalances };
    },
  };
};