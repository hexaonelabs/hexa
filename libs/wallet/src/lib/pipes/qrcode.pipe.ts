import { Pipe, PipeTransform } from "@angular/core";
import QRCode from 'qrcode'

@Pipe({
  name: "qrcode"
})
export class QRcodePipe implements PipeTransform {
  async transform(value: string): Promise<string> {
    if (!value) return value;

    try {
      const url = await QRCode.toDataURL(value)
      console.log(url)
      return url;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
}