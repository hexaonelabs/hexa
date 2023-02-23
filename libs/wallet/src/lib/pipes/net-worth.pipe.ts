import { Pipe } from "@angular/core";

@Pipe({
  name: "netWorth"
})
export class NetWorthPipe {
  transform(value: {value:number}[]) {
    if (!value) return 0;
    const total = value.reduce(
      (acc, token) => acc + token.value||0, 
      0
    );
    // only 2 decimals
    return Math.round(total * 100) / 100;
  }
}