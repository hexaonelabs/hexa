import { DID } from 'dids';
import { JWE } from 'did-jwt';

export interface IEncryptionService {
  encryptData(lib: DID, data: string, authorizedDID?: string[]): Promise<JWE>;
  decryptData(lib: DID, data: JWE): Promise<string>;
}