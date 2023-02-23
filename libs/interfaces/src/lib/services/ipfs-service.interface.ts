import { IPFS } from "ipfs-core";

export type DagAPI = IPFS['dag'];

export interface IIPFSService {
  disconect(): Promise<void>;
  add(file: File | Blob): Promise<{
    cid: string;
  }>;
  getFromCID(cid: string, type?: string): Promise<File>;
  getDag(): Promise<DagAPI>;
}