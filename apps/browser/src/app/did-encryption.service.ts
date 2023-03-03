import { Inject, Injectable } from "@angular/core";
import { IEncryptionService, IIdentityService } from "@d-workspace/interfaces";
import { JWE } from 'did-jwt';

// Doc: https://blog.ceramic.network/how-to-store-signed-and-encrypted-data-on-ipfs/   

@Injectable()
export class DIDEncryptionService implements IEncryptionService {

  constructor(
    @Inject('APP_DID_SERVICE') private readonly _identityService: IIdentityService
  ){}

  async encryptData(data: string, authorizedDID: string[] = []) {
    const did = this._identityService.did$.value;
    console.log(`[INFO] {DIDEncryptionService} `, did, data, authorizedDID);
    const jwe = await did.createDagJWE(
      { data }, 
      // liste of authorized DID ID to decrypt
      [
        did.id,
        ...authorizedDID
      ]
    ); 
    return jwe;
  }

  async decryptData(jwe: JWE) {
    const did = this._identityService.did$.value;
    console.log(`[INFO] {DIDEncryptionService} `, did, jwe);
    const decryptedJWE = await did.decryptDagJWE(jwe);
    return decryptedJWE['data'] as string;
  }
}