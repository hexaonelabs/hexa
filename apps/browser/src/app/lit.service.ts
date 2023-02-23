import { Injectable } from '@angular/core';
import { LitNodeClient, encryptFile, uint8arrayToString, decryptFile, checkAndSignAuthMessage } from "@lit-protocol/lit-node-client";
import { JsonAuthSig } from "@lit-protocol/constants";
import { LitContracts, IPFSHash } from "@lit-protocol/contracts-sdk";
import { environment } from '../environments/environment';

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


@Injectable()
export class LitService {
  private readonly _chain = environment.defaultChain;
  private _litNodeClient!: LitNodeClient;
  private _authSig!: JsonAuthSig;
  public readonly standardContractType = '';
  public readonly contractAddress = '';
  public defaultAccessControls: IAccessControlConditions[] = [
    {
      chain: this._chain,
      contractAddress: this.contractAddress,
      standardContractType: this.standardContractType,
      method: 'eth_getBalance',
      parameters: [':userAddress', 'latest'],
      returnValueTest: {
        comparator: '>=',
        value: '0', // 0.000001 ETH
      },
    },
  ];

  private async _connect() {
    const client = new LitNodeClient(
      { debug: false }
    );
    await client.connect();
    console.log('[INFO] LitNode connected');
    this._litNodeClient = client;
  }

  public async connect() {
    await this._connect();
  }

  async encryptFile(
    file: File | Blob,
    accessControlConditions: IAccessControlConditions[],
    chain = this._chain
  ): Promise<{
    encryptedFile: Blob;
    encryptedSymmetricKey: string;
  }> {
    if (!this._litNodeClient) {
      await this._connect();
    }
    if (!this._authSig) {
      this._authSig = await this._getAuthSig(chain);
    }
    const result = await encryptFile({
      file: file,
    });
    if (!result) {
      throw new Error('Unable to encrypt file');
    }
    const { encryptedFile, symmetricKey } = result;
    const encryptedSymmetricKey = await this._litNodeClient.saveEncryptionKey({
      accessControlConditions,
      symmetricKey: symmetricKey as Uint8Array,
      authSig: this._authSig,
      chain,
      permanent: 0,
    });
    return {
      encryptedFile,
      encryptedSymmetricKey: uint8arrayToString(
        encryptedSymmetricKey,
        'base16'
      ),
    };
  }

  async decryptFile(
    encryptedFile: File | Blob,
    encryptedSymmetricKey: string,
    accessControlConditions: IAccessControlConditions[],
    chain = this._chain
  ): Promise<{ decryptedFile: File | Blob }> {
    if (!this._litNodeClient) {
      await this._connect();
    }
    if (!this._authSig) {
      this._authSig = await this._getAuthSig(chain);
    }
    console.log(
      '[INFO] Message signed, try to get encryption key from LitNode'
    );
    const symmetricKey = await this._litNodeClient.getEncryptionKey({
      accessControlConditions,
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig: this._authSig,
    });
    console.log('[INFO] Encryption key retrieved, try to decrypt file');
    const arrayBufferResult = await decryptFile({
      symmetricKey: symmetricKey as Uint8Array,
      file: encryptedFile,
    });
    if (!arrayBufferResult) {
      throw new Error('Unable to decrypt file');
    }
    const decryptedFile = new Blob([arrayBufferResult], {
      type: encryptedFile.type,
    });
    return { decryptedFile };
  }

  async disconnect() {
    if (!this._litNodeClient) {
      return;
    }
    this._litNodeClient = null as any;
    this._authSig = null as any;
    console.log('[INFO] LitNode disconnected');
  }

  private async _getAuthSig(chain: string) {
    // TODO: display loader for a better UX
    const authSig = await checkAndSignAuthMessage({
      chain,
    });
    return authSig;
  }

  private async _initContract() {
    // const wasm = await initWasmEcdsaSdk();
    const litContracts = new LitContracts();
    await litContracts.connect();
    console.log('[INFO] LitContracts initialized', litContracts);
    const mintCost = await litContracts.pkpNftContract.read.mintCost();
    const tx = await litContracts.pkpNftContract.write.mintNext(2, { value: mintCost });
    console.log('[INFO] >>>>', tx, mintCost);
    
  }
}
