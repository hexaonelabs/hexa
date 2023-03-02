import { Injectable } from '@angular/core';
import { DID } from 'dids';
import { JWE } from 'did-jwt';
import { IEncryptionService } from '@d-workspace/interfaces';

export interface IAccessControlConditions {
  chain: string;
  contractAddress?: string;
  standardContractType?: string;
  method: string;
  parameters: string[];
  returnValueTest: {
    comparator: string
    value: string
  };
}

// Doc: https://blog.ceramic.network/how-to-store-signed-and-encrypted-data-on-ipfs/   

@Injectable()
export class EncryptionService implements IEncryptionService {

  async encryptData(lib: DID, data: string, authorizedDID: string[] = []) {
    console.log(`[INFO] {EncryptionService} `, lib, data, authorizedDID);
    const jwe = await lib.createDagJWE(
      { data }, 
      // liste of authorized DID ID to decrypt
      [
        lib.id,
        ...authorizedDID
      ]
    ); 
    return jwe;
  }

  async decryptData(lib: DID, jwe: JWE) {
    const decryptedJWE = await lib.decryptDagJWE(jwe);
    return decryptedJWE['data'] as string;
  }

}
