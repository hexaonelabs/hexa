import { Pipe } from "@angular/core";
import { TokenInterface } from "../interfaces/token.interface";

@Pipe({
  name: "assetsType"
})
export class AssetsTypePipe {
  transform(value: TokenInterface[], typeName: 'token'|'nft'|'tx'): any {
    if (!value) return [];
    if (!typeName) return value;
    switch (true) {
      case typeName === 'token':
        return value
          .filter((token) => token.type !== "nft" && token.balance > 0)
          .filter((token) => token.balance > 0 )
          .filter(token => !token.name.includes('.'))
          .sort((a, b) => b.value - a.value);
      case typeName === 'nft':
        return value.filter((token) => token.type === "nft" && token.balance > 0);
      case typeName === 'tx':
        throw new Error('Not implemented yet');
    }
  }
}