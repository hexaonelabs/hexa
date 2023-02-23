import { Pipe, PipeTransform } from '@angular/core';
import { MediafileInterface } from '../interfaces/mediafile.interface';
import { MediaFileService } from '../services/mediafile.service';

@Pipe({
  name: 'previewFile'
})
export class PreviewFilePipe implements PipeTransform {

  constructor(
    private readonly _mediafile: MediaFileService
  ) {}

  async transform(value?: MediafileInterface|undefined): Promise<string> {
    if (!value || !value.cid) {
      return '';
    }
    // use method from servcie
    const {file} = await this._mediafile.downloadFile(value._id, false);
    if (!file) {
      return 'Error loading file';
    }
    const url = URL.createObjectURL(file);
    return url;    
  }

}
