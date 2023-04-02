import { Inject, Injectable } from "@angular/core";
import { IEncryptionService, IIdentityService } from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from "@hexa/token-injection";
import { JWE } from 'did-jwt';

// Doc: https://blog.ceramic.network/how-to-store-signed-and-encrypted-data-on-ipfs/   

@Injectable()
export class DIDEncryptionService implements IEncryptionService {

  constructor(
    @Inject(getInjectionToken(TOKENS_NAME.APP_DID_SERVICE)) private readonly _identityService: IIdentityService
  ){}

  async encryptData(data: string, authorizedDID: string[] = []) {
    const unit8Data = new TextEncoder().encode(data);
    const did = this._identityService.did$.value;
    const didID = this._getAuthorizedDidID();
    if (!did) throw new Error('{DIDEncryptionService}: DIDSession not initialized');
    if (!did.createJWE) throw new Error('{DIDEncryptionService}: createJWE not implemented');
    try {      
      const jwe = await did.createJWE(
        unit8Data, 
        // liste of authorized DID ID to decrypt
        [
          didID,
          ...authorizedDID
        ]
      ); 
      return jwe;
    } catch (error: any) {
      throw new Error(`[ERROR] {DIDEncryptionService}: ${error?.message}`);
    }
  }

  async decryptData(jwe: JWE) {
    const did = this._identityService.did$.value;
    console.log(`[INFO] {DIDEncryptionService} `, did, jwe);
    const decryptedJWEunit8Data = await did.decryptJWE(jwe);
    const decryptedJWE = new TextDecoder().decode(decryptedJWEunit8Data);
    return decryptedJWE;
  }

  private _getAuthorizedDidID() {
    if (!this._identityService.did$.value) throw new Error('DIDSession not initialized');
    // get existing parent DID id or current DID id
    const id = this._identityService.did$.value.hasParent
      ? this._identityService.did$.value.parent
      : this._identityService.did$.value.id;
    return id;
  }
}