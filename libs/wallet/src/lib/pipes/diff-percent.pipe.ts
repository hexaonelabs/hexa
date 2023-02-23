import { Pipe } from "@angular/core";

@Pipe({
  name: "diffPercent"
})
export class DiffPercentPipe {
  transform(value: number|undefined, oldValue: number|undefined): any {
    if (!value || !oldValue) return 0;
    const percent = ((value - oldValue) / oldValue) * 100;
    // returtn rounded with 2 decimal percent value
    return Math.round(percent * 100) / 100;
  }
}