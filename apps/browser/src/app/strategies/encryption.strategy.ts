import { IEncryptionService } from "@d-workspace/interfaces";

/**
 * Strategy pattern for encryption and decryption services
 */
export class EncryptionStrategy implements IEncryptionService {

  private _lib!:IEncryptionService;
  
  setStrategy(lib: IEncryptionService) {
    this._lib = lib;
  }

  async encryptData(data: string, authorizedIDs: string[] = []) {
    return this._lib.encryptData(data, authorizedIDs);
  }

  async decryptData(data: {
    [key: string]: any;
  }) {
    return this._lib.decryptData(data);
  }

}