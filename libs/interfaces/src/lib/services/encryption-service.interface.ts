export interface IEncryptionService {
  encryptData(data: string, authorizedDID?: string[]): Promise<{
    [key: string]: any;
  }>;
  decryptData(data: {
    [key: string]: any;
  }): Promise<string>;
}