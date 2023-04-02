import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject, combineLatest, filter, map } from "rxjs";
import { v4 as uuidV4 } from 'uuid';
import { CID } from 'multiformats/cid';
import { Share } from '@capacitor/share';
import { IAuthService, IDatastoreService, IEncryptionService, IIPFSService, INotificationService, IPinningServiceStrategy, IPromptStrategyService} from "@hexa/interfaces";
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import { IAccessControlConditions, MediafileInterface } from "../interfaces/mediafile.interface";
import { b64ToFile, fileToB64 } from "../drive.utils";

const ROOT_DB_COLLECTION = 'd-drive';

@Injectable()
export class MediaFileService {
  private readonly _queryFilterBy$: BehaviorSubject<string | null> =
  new BehaviorSubject(null as any);
  private readonly _filterBy$: BehaviorSubject<string> = new BehaviorSubject(
    'root'
  );
  private readonly _items$: BehaviorSubject<MediafileInterface[]> = new BehaviorSubject(
    null as any
  );
  public readonly breadcrumbs$ = combineLatest([
      this._items$.asObservable(),
      this._filterBy$.asObservable(),
    ]).pipe(
      map(([items, path]) => {
        const ROOT = { name: 'root', _id: 'root' };
        if (!items?.length) {
          return [ROOT];
        }
        const breadcrumbs: { _id: string; name: string }[] = [];
        // find `root` parent folder from current path
        while (!breadcrumbs.find((b) => b.name === 'root')) {
          const parent = items.find((item) => item._id === path && item.isFolder);
          if (!parent) {
            breadcrumbs.unshift(ROOT);
            break;
          }
          breadcrumbs.unshift({ name: parent.name, _id: parent._id });
          if (parent.name === 'root') {
            break;
          }
          path = parent.parent;
        }
        return breadcrumbs;
      })
  );
  public readonly items$ = combineLatest([
    this._items$.asObservable().pipe(filter(Boolean)),
    this._filterBy$.asObservable(),
    this._queryFilterBy$.asObservable(),
  ]).pipe(
    map(([items, filterBy, queryFilter]) =>
      items?.filter((item) =>
        queryFilter
          ? item.name.toLowerCase().includes(queryFilter.toLowerCase())
          : item.parent === filterBy
      )
    ),
    map((items) => {
      // extract filers & folders
      const folders = items.filter((item) => item?.isFolder);
      const filess = items.filter((item) => !item?.isFolder);
      // return sorted datas
      const result = [
        // sort folders first
        ...folders.sort((a, b) => a.name?.localeCompare(b.name)),
        ...filess.sort((a, b) => a.name?.localeCompare(b.name)),
      ];
      return result;
    })
  );
  public readonly allMedia$ = this._items$.asObservable();

  constructor(
    @Inject(getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)) private readonly _authService: IAuthService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_IPFS_SERVICE)) private readonly _fileService: IIPFSService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_DATASTORE_SERVICE)) private readonly _datastoreService: IDatastoreService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_ENCRYPTION_SERVICE)) private readonly _encryptionService: IEncryptionService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_NOTIFICATION_SERVICE)) private readonly _notificationSerivce: INotificationService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_IPFS_PINNING_SERVICE)) private readonly _ipfsPinningService: IPinningServiceStrategy,
    @Inject(getInjectionToken(TOKENS_NAME.APP_PROMPT_STRATEGY_SERVICE)) private readonly _promptStrategy: IPromptStrategyService,
  ) {}

  async getFiles() {
    const { files = [] } = await this._datastoreService.getData(
      ROOT_DB_COLLECTION, // collection
      ['files'], // key
      { files: [] } // default value to save if not exist (optional)
    );
    console.log('[INFO] files: ', files);
    this._items$.next(files);
  }

  async getAllFolders() {
    const folders = this._items$.value.filter((item) => item.isFolder);
    return folders;
  }

  async upload({
    file,
    accessControlConditions = [],
    metaDataValue = undefined, 
    fromAccount = undefined,
  }: {
    file: File | Blob;
    accessControlConditions: IAccessControlConditions[] ,
    metaDataValue?: MediafileInterface|undefined, 
    fromAccount?: string,
  }) {
    // check if pinning service is ready and setup
    await this._setupPinningStrategy()
    // build file metadata object
    const _id = uuidV4();
    const isoDateTime = new Date().toISOString();
    const metaData: MediafileInterface = !metaDataValue 
      ? {
          parent: this._filterBy$.value,
          name: (file as File)?.name || _id,
          size: file.size,
          type: file.type,
          isFolder: false,
          createdIsoDateTime: isoDateTime,
          lastModifiedIsoDateTime: isoDateTime,
          _id,
        }
      : {
        ...metaDataValue,
        lastModifiedIsoDateTime: isoDateTime,
      };
    // encrypt file if needed
    if (accessControlConditions?.length > 0) {
      // update variables with encrypted data
      metaData.accessControlConditions = accessControlConditions;
    }
    // upload file to ipfs
    const { cid } = (accessControlConditions?.length <= 0) 
      ? await this._fileService.add(file)
      : await this._fileService.getDag()
        .then(async(dag) => {
            console.log('[INFO] {MediafileService} accessControlConditions: ', accessControlConditions);            
            const addressses = accessControlConditions
              .filter((acc) => acc.returnValueTest?.comparator === '=')
              .map((acc) => acc.returnValueTest.value);
            console.log('[INFO] {MediafileService} addressses: ', addressses);            
            // find DID from address
            const authorizedDID = await Promise.all(
              addressses.map((address) => this._authService.getAccountDID(address))
            );
            console.log('[INFO] {MediafileService} authorizedDID: ', authorizedDID);            
            const fileB64 = await fileToB64(file);
            console.log('[INFO] {MediafileService} fileB64: ', fileB64);            
            const jwe = await this._encryptionService.encryptData(
              fileB64,
              authorizedDID
            );
            console.log('[INFO] {MediafileService} jwe: ', jwe);
            const dagCID = await dag.put(jwe, { 
              storeCodec: 'dag-jose', 
              hashAlg: 'sha2-256',
              pin: true,
              preload: false,
              timeout: 10000,
            }); 
            console.log('[INFO] {MediafileService} dagCID: ', dagCID);                     
            const cid = dagCID?.toString();
            return { cid };
        });
    // pin hash
    await this._ipfsPinningService.pin(cid);
    // add CID to file metadata
    metaData.cid = cid;
    // update files list with new file metadata
    const files = [...this._items$.value, metaData];
    // update object data to database
    await this._datastoreService.saveData(
      { files }, 
      ROOT_DB_COLLECTION,
      ['files']
    );
    // notify shared user
    const destinationAddress = this._isWalletAddressEcryptionCondition(
      accessControlConditions,
      fromAccount
    );
    if (destinationAddress && file && fromAccount) {
      await this._notificationSerivce.sendNotification(
        metaData,
        fromAccount,
        destinationAddress,
        'drive'
      );
    }
    // update service state
    this._items$.next(files);
    return metaData;
  }

  async createFolder(name: string) {
    // find parent folder from current path
    const currentPath = this._filterBy$.value;
    // handle unexisting parent folder
    if (!currentPath) {
      throw new Error('CurrentPath not found');
    }
    // run upload task
    const isoDateTime = new Date().toISOString();
    const mediaFile: MediafileInterface = {
      parent: currentPath,
      name,
      size: 0,
      isFolder: true,
      _id: uuidV4(),
      createdIsoDateTime: isoDateTime,
      lastModifiedIsoDateTime: isoDateTime,
    };
    const mediaFiles = [...this._items$.value];
    mediaFiles.push(mediaFile);
    // update object data to database
    await this._datastoreService.saveData(
      { files: mediaFiles },
      ROOT_DB_COLLECTION,
      ['files']
    );
    // update state
    this._items$.next(mediaFiles);
  }

  async delete(id: string) {
    // check if pinning service is ready and setup
    await this._setupPinningStrategy()
    const files = [...this._items$.value];
    const index = files.findIndex((item) => item._id === id);
    if (index === -1) {
      throw new Error('File not found');
    }
    const cid = files[index].cid;
    if (cid) {
      // unpin file from ipfs
      await this._ipfsPinningService.unpin(cid).catch((err) => {
        console.log('[ERROR] unpin: ', err);
      });
    }
    // remove file from list
    files.splice(index, 1);
    // find all children files
    const children = files.filter((item) => item.parent === id);
    // unpin all children files
    await Promise.all(
      children.map(async (child) => {
        if (child.cid) {
          await this._ipfsPinningService.unpin(child.cid);
        }
      })
    );
    // remove all children files
    children.forEach((child) => {
      const childIndex = files.findIndex((item) => item._id === child._id);
      if (childIndex !== -1) {
        files.splice(childIndex, 1);
      }
    });
    // update object data to database
    await this._datastoreService.saveData(
      { files }, 
      ROOT_DB_COLLECTION,
      ['files']
    );
    // update state
    this._items$.next(files);
  }

  async rename(_id: string, newName: string) {
    const files = [...this._items$.value];
    const index = this._items$.value.findIndex((item) => item._id === _id);
    if (index === -1) {
      throw new Error('File not found');
    }
    // rename file
    files[index].name = newName;
    // update object data to database
    await this._datastoreService.saveData(
      { files }, 
      ROOT_DB_COLLECTION,
      ['files']
    );
    // update state
    this._items$.next(files);
  }

  async moveTo(itemId: string, itemDestination: MediafileInterface) {
    const files = [...this._items$.value];
    const index = files.findIndex((file) => file._id === itemId);
    if (index === -1) {
      throw new Error('File not found');
    }
    // move file
    files[index].parent = itemDestination._id;
    // update object data to database
    await this._datastoreService.saveData(
      { files }, 
      ROOT_DB_COLLECTION,
      ['files']
    );
    // update state
    this._items$.next(files);
  }

  async downloadFile(_id: string, inBorwser = true) {
    const { cid, name, accessControlConditions = [], type } =
      this._items$.value.find((item) => item._id === _id) || {};
    if (!cid) {
      throw new Error('File not found');
    }
    const result: {file?: File} = {}
    // load and decrypt file from IPFS
    if (accessControlConditions?.length > 0) { 
      const parsedCID = CID.parse(cid);
      const dag = await this._fileService.getDag();
      const jwe = await dag.get(parsedCID as any);
      const fileB64 = await this._encryptionService.decryptData(
        jwe.value
      );
      const file = b64ToFile(fileB64, name);
      // convert array buffer to file and overwrite result object
      result.file = file
    } else {
      // get file from ipfs
      const fileFromCID = await this._fileService.getFromCID(cid);
      result.file = fileFromCID ;
    }
    if (inBorwser) {
      console.log('[INFO] Creating download link...');
      // download file from browser
      const link = document.createElement('a');
      link.href = URL.createObjectURL(result.file);
      link.download = name || cid;
      link.click();
    }
    return result;
  }

  async shareWithEncryption(file: MediafileInterface, fromAccount: string) {
    const {cid, accessControlConditions} = file;
    if (!cid) {
      throw new Error('File not found');
    }
    // get file from ipfs
    const {file: fileFromCID} = await this.downloadFile(file._id, false);
    if (!fileFromCID) {
      throw new Error('File not found');
    }
    // re upload file to ipfs with new encryption
    await this.upload({
      file: fileFromCID,
      accessControlConditions: accessControlConditions||[],
      metaDataValue: file,
      fromAccount
    });
    // delete old pin
    await this.delete(file._id);
  }

  async shareWithWebAPI(mediaFile: MediafileInterface, url: string) {
    const {file} = await this.downloadFile(mediaFile._id, false);
    if (!file) {
      throw new Error('File not found');
    }
    try {
      const {value: canShare} = await Share.canShare();
      if (canShare) {
        await Share.share({
          title: 'hexa share a file',
          text: `You received a file from hexa. You can click here to download from IPFS Network: ${url}`,
          url,
          // sfiles: [file]
        });
      } else {
        // use browser polyfill
        await navigator.share({
          title: 'hexa Share file',
          text: `You received a file from hexa. You can click here to download from IPFS Network: ${url}`,
          url,
          files: [file]
        });
      }
    } catch (error: any) {
      console.error(error);
      throw new Error('Share API not supported');
    }
  }

  searchByName(name: string | null) {
    if (name) {
      this._filterBy$.next('root');
    }
    this._queryFilterBy$.next(name);
  }

  navToFolderId(id: string) {
    this._queryFilterBy$.next(null);
    if (id === 'root') {
      this._filterBy$.next('root');
      return;
    }
    const folder = this._items$.value.find(
      (item) => item._id === id && item.isFolder
    );
    if (!folder) {
      throw new Error('Folder not found');
    }
    this._filterBy$.next(id);
  }

  private _isWalletAddressEcryptionCondition(
    encryptAccessCondition: IAccessControlConditions[] | undefined,
    account?: string
  ) {
    // check existing shared users account with Notifs protocol
    const isWalletAddressCondition = encryptAccessCondition?.find(
      (c) =>
        c.method === '' &&
        c.parameters.includes(':userAddress') &&
        c.returnValueTest.value !== account
    );
    const destinationAddress = isWalletAddressCondition?.returnValueTest?.value;
    return destinationAddress;
  }

  private _buildAbsolutPath(file: MediafileInterface): string {
    const path = [file.name];
    let parent = this._items$.value.find((item) => item._id === file.parent);
    while (parent !== undefined) {
      path.unshift(parent.name);
      parent = this._items$.value.find((item) => item._id === parent?.parent);
    }
    return path.join('/');
  }

  private async _setupPinningStrategy() {
    const userData = this._authService.profile$.value;
    console.log('[INFO] Setup pinning strategy...', userData);
    
    // check existing config for pining servcie
    const config = await this._promptStrategy.askSetupService(userData?.ipfsConfig?.serviceName);
    if (!config) {
      return;
    }
    if (config?.token === '' ) {
      config.serviceName = '';
    }
    // save user config to user base
    await this._authService.updateProfilData({
      ...userData,
      ipfsConfig: {
        ...config
      }
    });
    // define pinning service using user cnfig
    this._ipfsPinningService.setStrategy(config.serviceName);
  }
}