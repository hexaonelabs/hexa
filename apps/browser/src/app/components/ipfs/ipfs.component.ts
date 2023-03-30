import { CommonModule } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IIPFSService } from "@d-workspace/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@d-workspace/token-injection";
import { IonicModule } from "@ionic/angular";
import { BehaviorSubject } from "rxjs";

@Component({
  standalone: true,
  selector: "d-workspace-ipfs",
  templateUrl: "./ipfs.component.html",
  styleUrls: ["./ipfs.component.scss"],
  imports: [
    CommonModule,
    IonicModule,
  ]
})
export class IpfsComponent implements OnInit {

  fileUrl$: BehaviorSubject<string> = new BehaviorSubject<string>(undefined as any);

  constructor(
    private readonly _route: ActivatedRoute,
    @Inject(getInjectionToken(TOKENS_NAME.APP_IPFS_SERVICE)) private readonly _fileService: IIPFSService,
  ) {}

  async ngOnInit() {
    const cid = this._route.snapshot.paramMap.get('cid');
    if (!cid) {
      throw new Error('CID not found. Unable to download file.')
    }
    const {file} = await this.downloadFile(cid, false);
    console.log('[INFO] File downloaded', file);
    
    if (!file) {
      throw new Error('File not found');
    }
    const url = URL.createObjectURL(file);
    this.fileUrl$.next(url);
  }

  async downloadFile(cid: string, inBorwser = true) {
    if (!cid) {
      throw new Error('File not found');
    }
    const result: {file?: File} = {}
    // get file from ipfs
    const fileFromCID = await this._fileService.getFromCID(cid);
    result.file = fileFromCID ;
    if (inBorwser) {
      console.log('[INFO] Creating download link...');
      // download file from browser
      const link = document.createElement('a');
      link.href = URL.createObjectURL(result.file);
      link.download = cid;
      link.click();
    }
    return result;
  }
}