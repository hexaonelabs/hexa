import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "multiply"
})
export class MultiplyPipe implements PipeTransform {
  transform(value: any, multiplyBy: any): number {
    if (!value) return 0;
    if (!multiplyBy) return value;
    // convert all params to Number
    const _value = Number(value);
    const _multiplyBy = Number(multiplyBy);
    // return the result of the multiplication
    return _value * _multiplyBy;
  }
}