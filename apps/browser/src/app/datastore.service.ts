import { Inject, Injectable } from "@angular/core";
import { CeramicClient } from '@ceramicnetwork/http-client';
import { DIDDataStore } from '@glazed/did-datastore';
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { IDatastoreService, IIdentityService } from "@d-workspace/interfaces";
import { AlertController, LoadingController, ToastController } from "@ionic/angular";

@Injectable()
export class DatastoreService implements IDatastoreService {
  
  public readonly aliases = {
    schemas: {
      basicProfile:
        'ceramic://k3y52l7qbv1frxt706gqfzmq6cbqdkptzk8uudaryhlkf6ly9vx21hqu4r6k1jqio',
    },
    definitions: {
      BasicProfile:
        'kjzl6cwe1jw145cjbeko9kil8g9bxszjhyde21ob8epxuxkaon1izyqsu8wgcic',
    },
    tiles: {},
  };
  public readonly datastore = new DIDDataStore({ 
    ceramic: this._ceramic, 
    model: this.aliases
  });
  
  constructor(
    @Inject('APP_CERAMIC_SERVICE') private readonly _ceramic: CeramicClient,
    @Inject('APP_DID_SERVICE') private readonly _didService: IIdentityService,
    @Inject('APP_IS_PROD') private readonly _isProd: boolean,
    
    private readonly _loaderService: LoadingController,
    private readonly _toastService: ToastController,
  ) {}

  /**
   * Wrapper that normalize the object returned by Ceramic database
   * as a simple object with only the content of the document and the id
   * This method using DID authentication to load the document with full access (read/write)
   * @param family 
   * @param tags 
   * @param data 
   * @returns 
   */
  async getData<T>(family: string, tags: string[], data?: T): Promise<T> {
    console.log(`[INFO] {DatastoreService} getData() Query:`, family, tags);    
    const doc = await this._getDocument<T>(
      this._isProd ? '' : `DEV=${family}`, 
      tags, 
      data
    );
    console.log('[INFO] {DatastoreService} getData() Result: ', doc, doc.id.toString());
    return {
      ...doc.content as T,
      _id: doc.id.toString()
    };
  }

  /**
   * Wrapper that normalize call to load data from Ceramic database
   * as a simple object with only the content of the document and the id
   * This method not use authentication and load the document with read only access
   * @param streamId 
   */
  async loadData(streamId: string) {
    this._authorizeCeramicWithDID();
    const doc = await TileDocument.load(this._ceramic, streamId);
    return {
      ...doc,
      _id: doc.id.toString()
    };
  }

  /**
   * Wrapper that normalize call to save new entry data in Ceramic database
   * and return the full object of the document
   * @param data 
   * @param family 
   * @param tags 
   * @returns 
   */
  async saveData<T>(data: T, family: string, tags: string[]) {
    // Set document controlled by the authenticated DID
    const controller = this._authorizeCeramicWithDID();
    if (!controller) throw new Error('Ceramic instance does not have an authenticated DID');
    // The following call will fail if the Ceramic instance does not have an authenticated DID
    const doc = await TileDocument.deterministic<T>(
      this._ceramic, 
      {
        // A single controller must be provided to reference a deterministic document
        controllers: [controller],
        // A family or tag must be provided in addition to the controller
        family: this._isProd ? '' : `DEV=${family}`,
        tags,
      }, 
      {
        pin: true
      }
    );
    await doc.update(data);
    const _id = doc.id.toString();
    const content = doc.content;
    return {_id, ...content};
  }
  
  // async updateUserProfil() {
    
  // }

  // private async _init() {}

  /**
   * Private method that load a document from Ceramic database using deterministic method
   * and return it as a `TileDocument`
   * Optionnaly this method can create document content if it does not exist yet and a data object is provided.
   * @param family 
   * @param tags 
   * @param data 
   * @returns 
   */
  private async _getDocument<T>(
    family: string, 
    tags: string[],
    data?: T, 
  ): Promise<TileDocument<T>> {
    // Load the document controlled by the authenticated DID
    const controller = this._authorizeCeramicWithDID();
    if (!controller) throw new Error('Ceramic instance does not have an authenticated DID');
    const doc = await TileDocument.deterministic<T>(this._ceramic, {
      // A single controller must be provided to reference a deterministic document
      controllers: [controller],
      // A family or tag must be provided in addition to the controller
      family: this._isProd ? '' : `DEV=${family}`,
      tags,
    });
    // The document has no content as it's created based on metadata only...
    const haveEmptyContent = doc.content == null || Object.keys(doc.content||{}).length === 0;
    if (haveEmptyContent && data) {
      console.log('[INFO] {DatastoreService} No content found, creating new document: ', data); 
      // display message to user
      const ionLoader = await this._loaderService.create({
        message: `Creating database document to store your data...`,
        keyboardClose: false,
      });
      await ionLoader.present();
      // set content with data
      await doc.update(data);
      // dismiss message
      await ionLoader.dismiss();
      // display toast message
      const ionToast = await this._toastService.create({
        message: `Database created successfully`,
        duration: 2000,
        color: 'success',
        position: 'bottom',
      });
      ionToast.present();
    }
    return doc;
  }

  /**
   * Private method that authorize Ceramic instance by use the DIDSession DID.
   * This method is called before each Ceramic call to ensure that 
   * the DIDSession is initialized and the Ceramic instance is authorized to use it.
   */
  private _authorizeCeramicWithDID() {
    // set ceramic DID to the one from the DIDSession
    if (!this._didService.did$.value) throw new Error('DIDSession not initialized');
    this._ceramic.did = this._didService.did$.value;
    return this._ceramic?.did?.id;
  }
}