import { Injectable } from '@angular/core';
import { create, IPFS  } from 'ipfs-core';
import { BehaviorSubject } from 'rxjs';
import { CID } from 'multiformats/cid';
import { DagAPI, IIPFSService, IPiningService } from '@hexa/interfaces';

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


@Injectable()
export class LocalIPFSService implements IIPFSService {
  async disconect(){
    console.log('disconect');
  }

  async add(file: File | Blob): Promise<{
    cid: string;
  }>{
    // get local drive database from localStorage
    const existingKey = localStorage.getItem('local:hexa:drive:ipfs');
    let existingData: any = {};
    if (existingKey) {
      existingData = JSON.parse(existingKey);
    }
    // store file as base64 to local storage
    const reader = new FileReader();
    reader.readAsDataURL(file);
    const cid: string = await new Promise((resolve, reject) => {
      reader.onload = () => {
        const name = (file as any)?.name||'filename';
        const base64 = reader.result?.toString();
        existingData[name] = base64;
        localStorage.setItem('local:hexa:drive:ipfs', JSON.stringify(existingData));
        resolve(name)
      };
      reader.onerror = (error) => {
        console.log('Error: ', error);
        reject(error as any);
      };
    });
    return {
      cid
    }
  }

  async getFromCID(cid: string, type?: string): Promise<File>{
    const existingKey = localStorage.getItem('local:hexa:drive:ipfs');
    let existingData: any = {};
    if (existingKey) {
      existingData = JSON.parse(existingKey);
    }
    const base64 = existingData[cid];
    // create file from base64
    const response = await fetch(base64);
    const blob = await response.blob();
    const file = new File([blob], cid, { type });
    return file;
  }

  async getDag(): Promise<any> {
    return {
      put: async (node: [key: string, value: any]) => {
        // get local drive database from localStorage
        const existingKey = localStorage.getItem('local:hexa:drive:ipfs');
        let existingData: any = {};
        if (existingKey) {
          existingData = JSON.parse(existingKey);
        }
        const cid = 'cid-' + Date.now();
        existingData[cid] = JSON.stringify(node);
        localStorage.setItem('local:hexa:drive:ipfs', JSON.stringify(existingData));
        return {
          cid: {
            toString: () => cid
          }
        }
      },
      get: async (cid: any) => {
        // get local drive database from localStorage
        const existingKey = localStorage.getItem('local:hexa:drive:ipfs');
        let existingData: any = {};
        if (existingKey) {
          existingData = JSON.parse(existingKey);
        }
        const value = existingData[cid] as string;
        return {
          value 
        }
      },
    };
  }
}
