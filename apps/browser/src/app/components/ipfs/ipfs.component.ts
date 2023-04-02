import { CommonModule } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { IIPFSService } from '@hexa/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import { IonicModule, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import * as confetti from 'canvas-confetti';

@Component({
  standalone: true,
  selector: 'hexa-ipfs',
  templateUrl: './ipfs.component.html',
  styleUrls: ['./ipfs.component.scss'],
  imports: [CommonModule, IonicModule],
})
export class IpfsComponent implements OnInit {
  @ViewChild('canvas', {static: false, read: ElementRef}) canvas!: ElementRef<HTMLCanvasElement>;
  cid$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined as any);
  ext$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined as any);
  fileUrl$: BehaviorSubject<SafeHtml | SafeUrl> = new BehaviorSubject<SafeHtml | SafeUrl>(
    undefined as any
  );

  constructor(
    private readonly _route: ActivatedRoute,
    protected readonly sanitizer: DomSanitizer,
    private readonly renderer2: Renderer2,
    private readonly _toastCtrl: ToastController,
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
    // show toast
    const toast = await this._toastCtrl.create({
      message: 'File is downloading...',
      duration: 5000,
      position: 'bottom',
      color: 'primary',
      buttons: [
        { text: 'ok', role: 'cancel', handler: () => {
          toast.dismiss();
        } }, 
      ],
    });
    await toast.present();
    // display confetti
    await this._confetti();
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

  private async _confetti() {
    this.renderer2.setStyle(this.canvas.nativeElement, 'display', 'block');
    const myConfetti = confetti.create(this.canvas.nativeElement, {
      resize: true,
      useWorker: true,
    });
    await myConfetti();
    this.renderer2.setStyle(this.canvas.nativeElement, 'display', 'none');
  }
}
