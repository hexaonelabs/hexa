import { Pipe, PipeTransform } from "@angular/core";
import { TokenInterface } from "@hexa/interfaces";

@Pipe({
  name: "groupByChain"
})
export class GroupByChainPipe implements PipeTransform {
  transform(value: TokenInterface[]): {
    symbol: string;
    name: string;
    type: string;
    decimals: number;
    priceUSD?: number;
    logoURI: string|undefined;
    chains: {logoURI: string|undefined; chainId: number}[];
    totalBalance: number;
    totalValue: number;
    details: TokenInterface[];
  }[] {
    const groupedByChain = value.reduce((acc, token) => {
      const existingToken = acc.find((t) => t.symbol.toLocaleUpperCase() === token.symbol.toLocaleUpperCase());
      if (existingToken) {
        existingToken.details.push(token);
        existingToken.chains.push({logoURI: token.logo, chainId: token.chain.id});
        if (!token.chain.isTestnet) {
          existingToken.totalBalance += token.balance;
          existingToken.totalValue += token.value;
        }
      } else {
        acc.push({
          symbol: token.symbol,
          name: token.name,
          type: token.type,
          decimals: token.decimals,
          priceUSD: token.priceUSD||token.rate,
          logoURI: token.logo,
          chains: [{logoURI: token.chain.logo, chainId: token.chain.id}],
          totalBalance: token.balance,
          totalValue: token.value,
          details: [token]
        });
      }
      return acc;
    }, [] as {
      symbol: string;
      name: string;
      type: string;
      decimals: number;
      priceUSD?: number;
      logoURI: string|undefined;
      chains: {logoURI: string|undefined; chainId: number}[];
      totalBalance: number;
      totalValue: number;
      details: TokenInterface[];
    }[]);
    return groupedByChain;
  }
}