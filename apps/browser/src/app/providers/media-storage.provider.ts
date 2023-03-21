import { IPFSService, PinataService } from "../services";

export const MEDIA_STORAGE_PROVIDER = [
  {
    provide: 'APP_IPFS_SERVICE',
    useClass: IPFSService,
  },
  {
    provide: 'APP_IPFS_PINNING_SERVICE',
    useClass: PinataService,
  },
];