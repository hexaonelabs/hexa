import { Injectable } from '@angular/core';
import { create, IPFS  } from 'ipfs-core';
import { BehaviorSubject } from 'rxjs';
import { CID } from 'multiformats/cid';
import { DagAPI, IIPFSService, IPiningService } from '@d-workspace/interfaces';

@Injectable()
export class IPFSService implements IIPFSService {
  private _ipfsNode!: IPFS;
  private readonly dag$: BehaviorSubject<DagAPI> = new BehaviorSubject<DagAPI>(null as any);

  async disconect() {
    if (this._ipfsNode.dag) {
      await this._ipfsNode.stop();
    }
  }

  async add(file: File | Blob, s?: IPiningService) {
    if (!this._ipfsNode) {
      this._ipfsNode = await create({
        config: {},
      });
    }
    const nodeIsOnline = this._ipfsNode.isOnline();
    if (!nodeIsOnline) {
      throw new Error('IPFS node is not online');
    }
    const { cid } = await this._ipfsNode.add(file, {
      timeout: 10000,
      preload: false,
      progress: (prog: any) => console.log(`received: ${prog}`),
    });
    if (s) {
      await s.pin(cid.toString());
    }
    return {
      cid: cid.toString(),
    };
  }

  async pin(s: IPiningService, cid: string) {
    await s.pin(cid);
  }

  async unpin(s: IPiningService ,cid: string) {
    await s.unpin(cid);
  }

  async getFromCID(cid: string, type?: string): Promise<File> {
    if (!this._ipfsNode) {
      this._ipfsNode = await create();
    }
    const nodeIsOnline = this._ipfsNode.isOnline();
    if (!nodeIsOnline) {
      throw new Error('IPFS node is not online');
    }
    const asyncUint8Array = this._ipfsNode.cat(cid, {
      timeout: 10000,
      preload: false,
    });
    const blobsPart = [];
    for await (const chunk of asyncUint8Array) {
      blobsPart.push(chunk);
    }
    const file = new File(blobsPart, cid, { type });
    return file;
  }

  async getDag(): Promise<DagAPI> {
    if (!this._ipfsNode) {
      this._ipfsNode = await create({
        config: {},
      });
    }
    const nodeIsOnline = this._ipfsNode.isOnline();
    if (!nodeIsOnline) {
      throw new Error('IPFS node is not online');
    }
    if (!this.dag$.value) {
      this.dag$.next(this._ipfsNode.dag);
    }
    return this.dag$.value;
  }

  cidFromString(id: string) {
    return CID.parse(id);
  }

}
