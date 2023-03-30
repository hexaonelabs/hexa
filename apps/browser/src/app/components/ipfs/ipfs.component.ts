import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IIPFSService } from '@d-workspace/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';
import { IonicModule } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  standalone: true,
  selector: 'd-workspace-ipfs',
  templateUrl: './ipfs.component.html',
  styleUrls: ['./ipfs.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class IpfsComponent implements OnInit {
  cid$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined as any);
  ext$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined as any);
  fileUrl$: BehaviorSubject<SafeHtml | SafeUrl> = new BehaviorSubject<SafeHtml | SafeUrl>(
    undefined as any
  );

  constructor(
    private readonly _route: ActivatedRoute,
    protected sanitizer: DomSanitizer,
    @Inject(getInjectionToken(TOKENS_NAME.APP_IPFS_SERVICE))
    private readonly _fileService: IIPFSService
  ) {}

  async ngOnInit() {
    const cidParam = this._route.snapshot.paramMap.get('cid');
    if (!cidParam) {
      throw new Error('CID not found. Unable to download file.');
    }
    const [cid, ext] = cidParam.split('.');
    this.cid$.next(cid);
    if (ext) {
      this.ext$.next(ext);
    }
    // get file from ipfs
    const file = await this._fileService.getFromCID(cid);
    if (!file) {
      throw new Error('File not found');
    }
    // create local url to download file
    const url = URL.createObjectURL(file);
    const safeUrl = this._safeUrl(url, 'url');
    this.fileUrl$.next(safeUrl);
  }

  async downloadFile() {
    if (!this.fileUrl$.value) {
      throw new Error('File not found');
    }
    // get file from ipfs
    console.log('[INFO] Creating download link...');
    // get file from ipfs
    const file = await this._fileService.getFromCID(this.cid$.value);
    if (!file) {
      throw new Error('File not found');
    }
    // create local url to download file
    const url = URL.createObjectURL(file);
    // download file from browser
    const link = document.createElement('a');
    const ext = this.ext$.value ? '.' + this.ext$.value : ''
    link.href = url;
    link.download = this.cid$.value  + ext;
    link.click();
  }

  private _safeUrl(value: any, type: string): SafeHtml | SafeUrl {
    switch (type) {
			case 'html': return this.sanitizer.bypassSecurityTrustHtml(value);
			case 'style': return this.sanitizer.bypassSecurityTrustStyle(value);
			case 'script': return this.sanitizer.bypassSecurityTrustScript(value);
			case 'url': return this.sanitizer.bypassSecurityTrustUrl(value);
			case 'resourceUrl': return this.sanitizer.bypassSecurityTrustResourceUrl(value);
			default: throw new Error(`Invalid safe type specified: ${type}`);
		}
  }
}
