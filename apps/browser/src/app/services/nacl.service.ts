import * as nacl from 'tweetnacl';
import * as naclUtil from 'tweetnacl-util';
import { Buffer } from 'buffer';
import { ethers, utils } from 'ethers';
import {
  addHexPrefix,
  bufferToHex,
  bufferToInt,
  ecrecover,
  fromRpcSig,
  fromSigned,
  toBuffer,
  toUnsigned,
} from 'ethereumjs-util';
import secp256k1 from 'secp256k1';

interface EthEncryptedData {
  version: string;
  nonce: string;
  ephemPublicKey: string;
  ciphertext: string;
}

/**
 * Returns `true` if the given value is nullish.
 *
 * @param value - The value being checked.
 * @returns Whether the value is nullish.
 */
function isNullish(value: any) {
  return value === null || value === undefined;
}

/**
 * Encrypt a message.
 *
 * @param options - The encryption options.
 * @param options.publicKey - The public key of the message recipient.
 * @param options.data - The message data.
 * @param options.version - The type of encryption to use.
 * @returns The encrypted data.
 */
function encrypt({
  publicKey,
  data,
  version,
}: {
  publicKey: string;
  data: string;
  version: string;
}): EthEncryptedData {
  if (isNullish(publicKey)) {
    throw new Error('Missing publicKey parameter');
  } else if (isNullish(data)) {
    throw new Error('Missing data parameter');
  } else if (isNullish(version)) {
    throw new Error('Missing version parameter');
  }

  switch (version) {
    case 'x25519-xsalsa20-poly1305': {
      if (typeof data !== 'string') {
        throw new Error('Message data must be given as a string');
      }
      // generate ephemeral keypair
      const ephemeralKeyPair = nacl.box.keyPair();

      // assemble encryption parameters - from string to UInt8
      let pubKeyUInt8Array;
      try {
        pubKeyUInt8Array = naclUtil.decodeBase64(publicKey);
      } catch (err) {
        throw new Error('Bad public key');
      }

      const msgParamsUInt8Array = naclUtil.decodeUTF8(data);
      const nonce = nacl.randomBytes(nacl.box.nonceLength);

      // encrypt
      const encryptedMessage = nacl.box(
        msgParamsUInt8Array,
        nonce,
        pubKeyUInt8Array,
        ephemeralKeyPair.secretKey,
      );

      // handle encrypted data
      const output = {
        version: 'x25519-xsalsa20-poly1305',
        nonce: naclUtil.encodeBase64(nonce),
        ephemPublicKey: naclUtil.encodeBase64(ephemeralKeyPair.publicKey),
        ciphertext: naclUtil.encodeBase64(encryptedMessage),
      };
      // return encrypted msg data
      return output;
    }

    default:
      throw new Error('Encryption type/version not supported');
  }
}

/**
 * Encrypt a message in a way that obscures the message length.
 *
 * The message is padded to a multiple of 2048 before being encrypted so that the length of the
 * resulting encrypted message can't be used to guess the exact length of the original message.
 *
 * @param options - The encryption options.
 * @param options.publicKey - The public key of the message recipient.
 * @param options.data - The message data.
 * @param options.version - The type of encryption to use.
 * @returns The encrypted data.
 */
function encryptSafely({
  publicKey,
  data,
  version,
}: {
  publicKey: string;
  data: string;
  version: string;
}): EthEncryptedData {
  if (isNullish(publicKey)) {
    throw new Error('Missing publicKey parameter');
  } else if (isNullish(data)) {
    throw new Error('Missing data parameter');
  } else if (isNullish(version)) {
    throw new Error('Missing version parameter');
  }

  const DEFAULT_PADDING_LENGTH = 2 ** 11;
  const NACL_EXTRA_BYTES = 16;

  if (typeof data === 'object' && 'toJSON' in data) {
    // remove toJSON attack vector
    // TODO, check all possible children
    throw new Error(
      'Cannot encrypt with toJSON property.  Please remove toJSON property',
    );
  }

  // add padding
  const dataWithPadding = {
    data,
    padding: '',
  };

  // calculate padding
  const dataLength = Buffer.byteLength(
    JSON.stringify(dataWithPadding),
    'utf-8',
  );
  const modVal = dataLength % DEFAULT_PADDING_LENGTH;
  let padLength = 0;
  // Only pad if necessary
  if (modVal > 0) {
    padLength = DEFAULT_PADDING_LENGTH - modVal - NACL_EXTRA_BYTES; // nacl extra bytes
  }
  dataWithPadding.padding = '0'.repeat(padLength);

  const paddedMessage = JSON.stringify(dataWithPadding);
  return encrypt({ publicKey, data: paddedMessage, version });
}

/**
 * Decrypt a message.
 *
 * @param options - The decryption options.
 * @param options.encryptedData - The encrypted data.
 * @param options.privateKey - The private key to decrypt with.
 * @returns The decrypted message.
 */
function decrypt({
  encryptedData,
  privateKey,
}: {
  encryptedData: EthEncryptedData;
  privateKey: string;
}): string {
  if (isNullish(encryptedData)) {
    throw new Error('Missing encryptedData parameter');
  } else if (isNullish(privateKey)) {
    throw new Error('Missing privateKey parameter');
  }

  switch (encryptedData.version) {
    case 'x25519-xsalsa20-poly1305': {
      // string to buffer to UInt8Array
      const recieverPrivateKeyUint8Array = nacl_decodeHex(privateKey);
      const recieverEncryptionPrivateKey = nacl.box.keyPair.fromSecretKey(
        recieverPrivateKeyUint8Array,
      ).secretKey;

      // assemble decryption parameters
      const nonce = naclUtil.decodeBase64(encryptedData.nonce);
      const ciphertext = naclUtil.decodeBase64(encryptedData.ciphertext);
      const ephemPublicKey = naclUtil.decodeBase64(
        encryptedData.ephemPublicKey,
      );

      // decrypt
      const decryptedMessage = nacl.box.open(
        ciphertext,
        nonce,
        ephemPublicKey,
        recieverEncryptionPrivateKey,
      );
      if (!decryptedMessage) {
        throw new Error('Decryption failed');
      }
      // return decrypted msg data
      let output;
      try {
        output = naclUtil.encodeUTF8(decryptedMessage);
      } catch (err) {
        throw new Error('Decryption failed.');
      }

      if (output) {
        return output;
      }
      throw new Error('Decryption failed.');
    }

    default:
      throw new Error('Encryption type/version not supported.');
  }
}

/**
 * Decrypt a message that has been encrypted using `encryptSafely`.
 *
 * @param options - The decryption options.
 * @param options.encryptedData - The encrypted data.
 * @param options.privateKey - The private key to decrypt with.
 * @returns The decrypted message.
 */
function decryptSafely({
  encryptedData,
  privateKey,
}: {
  encryptedData: EthEncryptedData;
  privateKey: string;
}): string {
  if (isNullish(encryptedData)) {
    throw new Error('Missing encryptedData parameter');
  } else if (isNullish(privateKey)) {
    throw new Error('Missing privateKey parameter');
  }

  const dataWithPadding = JSON.parse(decrypt({ encryptedData, privateKey }));
  return dataWithPadding.data;
}

/**
 * Get the encryption public key for the given key.
 *
 * @param privateKey - The private key to generate the encryption public key with.
 * @returns The encryption public key.
 */
function getEncryptionPublicKey(privateKey: string): string {
  const privateKeyUint8Array = nacl_decodeHex(privateKey);
  const encryptionPublicKey =
    nacl.box.keyPair.fromSecretKey(privateKeyUint8Array).publicKey;
  return naclUtil.encodeBase64(encryptionPublicKey);
}

/**
 * Convert a hex string to the UInt8Array format used by nacl.
 *
 * @param msgHex - The string to convert.
 * @returns The converted string.
 */
function nacl_decodeHex(msgHex: string): Uint8Array {
  const msgBase64 = Buffer.from(msgHex, 'hex').toString('base64');
  return naclUtil.decodeBase64(msgBase64);
}

function recoverPublicKey(
  messageHash: Buffer,
  signature: string,
): Buffer {
  const sigParams = fromRpcSig(signature)
  return ecrecover(messageHash, sigParams.v, sigParams.r, sigParams.s)
}


const encryptWithEthAddress = async (web3Provider: ethers.providers.Web3Provider, ethAddress: string, data: string) => {
  const publicKey = await web3Provider.send('eth_getEncryptionPublicKey', [ethAddress])
  // const events = await web3Provider.getLogs({
  //   address: ethAddress,
  // });
  // console.log('events', events);
  // if (events.length === 0) {
  //   throw new Error('No events found. Address have to get some events first to be able to encrypt data');
  // }
  // const lastTransactionHash = events[events.length - 1].transactionHash;
  // const transaction = await web3Provider.getTransaction(lastTransactionHash);
  // if (transaction.from !== ethAddress) {
  //   throw new Error('The last transaction is not from the given address');
  // }
  // // get signature from transaction 
  // // get buffer msgHash
  // const msgHash = Buffer.from(lastTransactionHash.slice(2), 'hex');
  // if (!transaction.v || !transaction.r || !transaction.s) {
  //   throw new Error('Transaction is not signed');
  // }
  // const tr = Buffer.from(transaction.r.slice(2), 'hex');
  // const ts = Buffer.from(transaction.s.slice(2), 'hex');
  // const buff = ecrecover(msgHash, transaction.v, tr, ts);
  // convert to hex
  // const publicKey = `0x${buff.toString('hex')}`;
  // convert to b64
  const keyB64 = Buffer.from(publicKey.slice(2), 'hex').toString('base64');
  // const request = web3Provider.provider.request;
  // if (!request) {
  //   throw new Error('No provider requester available');
  // }
  // // Key is returned as base64
  // const keyB64 = await request({
  //   method: 'eth_getEncryptionPublicKey',
  //   params: [ethAddress],
  // }) as string;
  // const publicKey = Buffer.from(keyB64, 'base64');
  console.log('publicKey', publicKey);
  console.log('data', data);
  const { ephemPublicKey, ciphertext, nonce } = encrypt({
    publicKey: keyB64,
    data,
    version: 'x25519-xsalsa20-poly1305',
  });
  const r = {
    ephemPublicKey,
    ciphertext,
    nonce,
  };
  return Buffer.from(JSON.stringify(r));
};

const decryptWithEthAddress = async (web3Provider: ethers.providers.Web3Provider, ethAddress: string, data: Buffer|Uint8Array) =>  {
  // convet unit 8 array to utf 8 string
  const dataString = new TextDecoder().decode(data);
  // get JSON from base64 Buffer string
  const json = JSON.parse(dataString);
  const { ciphertext, nonce, ephemPublicKey } = json;
  // Reconstructing the original object outputed by encryption
  const structuredData = {
    version: 'x25519-xsalsa20-poly1305',
    ephemPublicKey,
    nonce,
    ciphertext,
  };
  // Convert data to hex string required by MetaMask
  const ct = `0x${Buffer.from(JSON.stringify(structuredData), 'utf8').toString('hex')}`;
  // Send request to MetaMask to decrypt the ciphertext
  // Once again application must have acces to the account
  const request = web3Provider.provider.request;
  if (!request) {
    throw new Error('No provider requester available');
  }
  const decrypt = await request({
    method: 'eth_decrypt',
    params: [ct, ethAddress],
  });
  return decrypt;
}

// function that convert file to base64 string
const fileToB64 = (file: File | Blob) => {
  return new Promise((resolve: (a: string) => void, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (!reader.result) {
          reject();
        }
        // check if is buffer or string and return as base64
        const result = typeof reader.result === 'string' 
          ? reader.result 
          : reader?.result?.toString();
        if (!result) {
          reject();
        }
        resolve(result as string);
      }
      reader.onerror = (error) => reject(error);
    }
  );
}
// function that conver base64 to file
const b64ToFile = (b64: string, fileName: string = 'file') => {
  const arr = b64.split(',');
  const mime = arr[0].match(/:(.*?);/)?.[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], fileName, { type: mime });
}
// function that convert file to buffer
const fileToBuffer = (file: File | Blob) => {
  return new Promise((resolve: (a: Uint8Array) => void, reject) => {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        if (!reader.result) {
          reject();
        }
        const u8 = new Uint8Array(reader.result as ArrayBuffer);
        resolve(u8);
      }
      reader.onerror = (error) => reject(error);
    }
  );
}

export const encryptFile = async (ops: {
  file: File | Blob,
  erc20HexAddress: string,
  ethProvider: ethers.providers.Web3Provider
}): Promise<File> => {
  // convert file to buffer stingified
  const fileB64 = await fileToB64(ops.file);
  // get public key from erc20 address
  // encrypt file buffer with public key
  const encryptedFileBuffer = await encryptWithEthAddress(ops.ethProvider, ops.erc20HexAddress, fileB64);
  return new File([encryptedFileBuffer], (ops.file as File)?.name||'filename', { type: ops.file.type });
};
export const decryptFile = async (ops: {
  encryptedFile: File | Blob,
  erc20HexAddress: string,
  ethProvider: ethers.providers.Web3Provider
}): Promise<File> => {
  // generate base64 string from blob
  // const b64 = await fileToB64(ops.encryptedFile);
  const u8 = await fileToBuffer(ops.encryptedFile);
  // decrypt encrypted file buffer with private key
  const decryptedB64String: string = await decryptWithEthAddress(ops.ethProvider, ops.erc20HexAddress, u8);
  // convert decrypted buffer to file
  const decryptedFile = b64ToFile(decryptedB64String, (ops.encryptedFile as File)?.name||'filename');
  return decryptedFile;
}

