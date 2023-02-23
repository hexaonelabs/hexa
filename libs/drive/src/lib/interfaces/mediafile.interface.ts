export interface IAccessControlConditions {
  chain?: string|undefined;
  contractAddress?: string;
  standardContractType?: string;
  method: string;
  parameters: string[];
  returnValueTest: {
    comparator: string
    value: string
  };
}

export interface MediafileInterface {
  _id: string;
  parent: string;
  name: string;
  lastModifiedIsoDateTime: string;
  createdIsoDateTime: string;
  type?: string;
  size?: number;
  cid?: string;
  isFolder?: boolean;
  encryptedSymmetricKey?: string;
  accessControlConditions?: IAccessControlConditions[];
}