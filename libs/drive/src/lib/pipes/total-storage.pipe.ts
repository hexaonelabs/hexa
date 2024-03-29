import { Pipe, PipeTransform } from '@angular/core';
import { MediafileInterface } from '../interfaces/mediafile.interface';

@Pipe({
  name: 'totalStorage'
})
export class TotalStoragePipe implements PipeTransform {

  transform(value?: MediafileInterface[]|null): number {
    if (!value) {
      return 0;
    }
    if (value.length <= 0) {
      return 0;
    }
    return value.reduce((acc, cur) => acc + (cur?.size||0), 0);
  }

}
