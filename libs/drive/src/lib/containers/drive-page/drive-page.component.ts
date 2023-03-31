import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { IAuthService, ILoadingService } from '@d-workspace/interfaces';
import { getInjectionToken, TOKENS_NAME } from '@d-workspace/token-injection';
import { AlertController, AlertOptions, IonSearchbar, ModalController, ToastController, ToastOptions } from '@ionic/angular';
import { OverlayBaseController } from '@ionic/angular/util/overlay';
import { firstValueFrom, map } from 'rxjs';
import { SelectFolderComponent } from '../../components/select-folder/select-folder.component';
import { SetupEncryptionComponent } from '../../components/setup-encryption/setup-encryption.component';
import { MediafileInterface } from '../../interfaces/mediafile.interface';
import { MediaFileService } from '../../services/mediafile.service';

@Component({
  selector: 'd-workspace-drive-page',
  templateUrl: './drive-page.component.html',
  styleUrls: ['./drive-page.component.scss'],
})
export class DrivePageComponent {

  @ViewChild(IonSearchbar, { static: false, read: ElementRef })
  public readonly searchbarElement!: ElementRef<IonSearchbar>;

  @ViewChild('addFileElement', { static: false, read: ElementRef })
  public readonly addFileElement!: ElementRef<HTMLInputElement>;
  public readonly account$ = this._authService.account$;
  public readonly items$ = this._mediaFileService.items$;
  public readonly allMedia$ = this._mediaFileService.allMedia$;
  public readonly breadcrumbs$ = this._mediaFileService.breadcrumbs$.pipe(
    map((breadcrumbs) => {
      const maxBreadcrumbs = this.maxBreadcrumbs;
      if (breadcrumbs.length > maxBreadcrumbs) {
        breadcrumbs.splice(0, breadcrumbs.length - maxBreadcrumbs);
      }
      return breadcrumbs;
    })
  );
  private readonly maxBreadcrumbs = 3;

  constructor(
    private readonly _mediaFileService: MediaFileService,
    private readonly _toastCtrl: ToastController,
    private readonly _alertCtrl: AlertController,
    private _modalCtrl: ModalController,
    @Inject(getInjectionToken(TOKENS_NAME.APP_WEB3AUTH_SERVICE)) private readonly _authService: IAuthService,
    @Inject(getInjectionToken(TOKENS_NAME.APP_LOADER_SERVICE)) private readonly _loaderService: ILoadingService,
  ) {}

  async ionViewDidEnter() {
    this._loaderService.setStatus(true);
    await this._mediaFileService.getFiles();
    this._loaderService.setStatus(false);
  }

  async actions(type: string, payload?: any) {
    console.log('[INFO] DrivePageComponent.actions():', type, payload);
    switch (true) {
      case type === 'addFile':
        this.searchbarElement.nativeElement.value = '';
        this.addFileElement.nativeElement.click();
        break;
      case type === 'onFileChange': {
        this.searchbarElement.nativeElement.value = '';
        const target = payload.target as HTMLInputElement;
        const files = [...Array.from(target.files||[])];
        if (!files[0]) {
          target.value = '';
          return;
        }
        // ask for encryption
        const {data: conditions, role } = await this._askFoEncryption();
        // check if user canceled operation
        if (!conditions || role === 'cancel') {
          target.value = '';
          return;
        }
        this._loaderService.setStatus(true);
        let i = 0;
        while (i !== files.length) {
          await this._mediaFileService.upload({
            file: files[i], 
            accessControlConditions: conditions,
            fromAccount: this._authService.account$.value,
          });
          ++i;
        }
        this._loaderService.setStatus(false);
        // notify user that files was uploaded successfully
        const opts: ToastOptions = {
          message: `File${files.length > 1 ? 's' : ''} uploaded successfully`,
          duration: 2000,
          position: 'bottom',
          color: 'primary',
          buttons: [
            {
              text: 'ok',
              side: 'end',
              handler: async () => await this._toastCtrl.dismiss(),
            },
          ],
          keyboardClose: true,
        };
        await this._displayMessage(this._toastCtrl, opts);
        target.value = '';
        break;
      }
      case type === 'searchByName': {
        const {
          detail: { value = null },
        } = payload;
        this._mediaFileService.searchByName(value);
        break;
      }
      case type === 'reload':
        this.searchbarElement.nativeElement.value = '';
        await this.ionViewDidEnter();
        break;
      case type === 'navTo': {
        this.searchbarElement.nativeElement.value = '';
        const { item: { _id } = null } = payload;
        this._mediaFileService.navToFolderId(_id);
        break;
      }
      case type === 'newFolder': {
        this.searchbarElement.nativeElement.value = '';
        await  this._createFolder();
        break;
      }
      case type === 'delete': {
        const { item: { _id = null, isFolder = false } = null } = payload;
        if (!_id) {
          throw new Error('delete(): payload is invalid');
        }
        this._deleteItem(_id, isFolder);
        break;
      }
      case type === 'download': {
        const { item: { _id = null, isFolder = false } = null } = payload;
        if (!_id || isFolder) {
          throw new Error('download(): payload is invalid');
        }
        await this._downloadFile(_id);
        break;
      }
      case type === 'rename': {
        const { item: { _id = null, name = null } = {} } = payload;
        if (!_id) {
          throw new Error('rename(): payload is invalid');
        }
        await this._rename(_id);
        break;
      }
      case type === 'move': {
        this.searchbarElement.nativeElement.value = '';
        const { item: { _id = null } = null } = payload;
        if (!_id) {
          throw new Error('move(): payload is invalid');
        }
        await this._move(_id);
        break;
      }
      case type === 'share': {
        const { item = null } = <{ item?: MediafileInterface }>payload;
        if (!item || item.isFolder) {
          throw new Error('share(): payload is invalid');
        }
        await this._share(item);
        break;
      }
    }
  }

  private async _createFolder() {
    // ask for folder name
    const alertOpts: AlertOptions = {
      header: 'Create new Folder',
      message: 'Enter folder name',
      inputs: [
        {
          name: 'folderName',
          type: 'text',
          placeholder: 'Folder Name',
          attributes: {
            require: true,
            minlength: 1,
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Create',
          role: 'ok',
        },
      ],
      mode: 'ios',
    };
    const { data, role } = await this._displayMessage(
      this._alertCtrl,
      alertOpts
    );
    if (role !== 'ok' || !data.values.folderName) {
      return;
    }
    this._loaderService.setStatus(true);
    await this._mediaFileService.createFolder(data.values.folderName);
    this._loaderService.setStatus(false);
    // notify user that folder was successfully created
    const notifOpts: ToastOptions = {
      message: 'Folder successfully created',
      duration: 2000,
      position: 'bottom',
      color: 'primary',
      buttons: [
        {
          text: 'ok',
          side: 'end',
          handler: async () => await this._toastCtrl.dismiss(),
        },
      ],
      keyboardClose: true,
    };
    await this._displayMessage(this._toastCtrl, notifOpts);
  }

  private async _deleteItem(_id: string, isFolder?: boolean) {
    // prompt to confirm delete if is a folder
    if (isFolder) {
      const alertOpts = {
        header: 'Delete Folder',
        message: `
          <p>Are you sure you want to delete this folder? All files and subfolders will be deleted.</p>
        `,
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
          },
          {
            text: 'Delete',
            role: 'confirm',
          },
        ],
      };
      const { role } = await this._displayMessage(
        this._alertCtrl, 
        alertOpts
      );
      if (role !== 'confirm') {
        return;
      }
    }
    this._loaderService.setStatus(true);
    await this._mediaFileService.delete(_id);
    this._loaderService.setStatus(false);
    // notify user that file was uploaded successfully
    const toastOpts: ToastOptions = {
      message: `${isFolder ? 'Folder' : 'File'} deleted successfully`,
      duration: 2000,
      position: 'bottom',
      color: 'primary',
      buttons: [
        {
          text: 'ok',
          side: 'end',
          handler: async () => await this._toastCtrl.dismiss(),
        },
      ],
      keyboardClose: true,
    };
    await this._displayMessage(
      this._toastCtrl, 
      toastOpts
    );
  }

  private async _downloadFile(_id: string) {
    this._loaderService.setStatus(true);
    await this._mediaFileService.downloadFile(_id);
    this._loaderService.setStatus(false);

  }

  private async _rename(_id: string) {
    // get current name
    const item = await firstValueFrom(
      this.items$.pipe(
        map(items => items.find(item => item._id === _id))
    ));
    const { name = null } = item || {};
    // ask for new name
    const opts = {
      header: 'Rename',
      message: 'Enter new name',
      inputs: [
        {
          name: 'newName',
          type: 'text',
          placeholder: 'New Name',
          value: name,
        },
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel' },
        { text: 'Rename', role: 'ok' },
      ],
      mode: 'ios',
    };
    const { data, role } = await this._displayMessage(
      this._alertCtrl,
      opts
    );
    if (role !== 'ok' || !data.values.newName) {
      return;
    }
    this._loaderService.setStatus(true);
    await this._mediaFileService.rename(_id, data.values.newName);
    this._loaderService.setStatus(false);
  }

  private async _move(_id: string) {
    const folders = await this._mediaFileService.getAllFolders();
    const ionModal = await this._modalCtrl.create({
      component: SelectFolderComponent,
      componentProps: {
        folders,
      },
      cssClass: 'modalSelectFolder',
    });
    await ionModal.present();
    const { data, role } = await ionModal.onDidDismiss();
    console.log('move(): data: ', data, role);
    if (role !== 'ok' || !data) {
      return;
    }
    this._loaderService.setStatus(true);
    this._mediaFileService.moveTo(_id, data);
    this._loaderService.setStatus(false);
    await this._displayMessage(this._toastCtrl, {
      message: 'File moved successfully',
      duration: 1200,
      position: 'bottom',
      color: 'primary',
      buttons: [
        {
          text: 'ok',
          side: 'end',
          handler: async () => await this._toastCtrl.dismiss(),
        },
      ],
      keyboardClose: true,
    });
  }

  private async _share(item: MediafileInterface) {
    if (!item.accessControlConditions && !item.encryptedSymmetricKey) {
      // TODO: use browser API too share CID link from IPFS gateway
      const url = `http://localhost:4200/#/ipfs/${item.cid}.${item.name.split('.').pop()}`;
      await this._mediaFileService.shareWithWebAPI(item, url);
    } else {
      // // open share modal
      const ionModal = await this._modalCtrl.create({
        component: SetupEncryptionComponent,
        cssClass: 'modalAlert',
        componentProps: {
          item,
          walletAddress: this._authService.account$.value,
          chainName: this._authService.signer$.value.provider.network.name,
        },
      });
      await ionModal.present();
      const { data: accessControlConditions, role } = await ionModal.onDidDismiss();
      if (role !== 'ok' || !accessControlConditions) {
        return;
      }
      // send new condition to shared method from media file service
      this._loaderService.setStatus(true);
      await this._mediaFileService.shareWithEncryption(
        {
          ...item,
          accessControlConditions,
        },
        this._authService.account$.value
      );
      this._loaderService.setStatus(false);
      // notify user that file was uploaded successfully
      const opts: ToastOptions = {
        message: `File shared successfully`,
        duration: 2000,
        position: 'bottom',
        color: 'primary',
        buttons: [
          {
            text: 'ok',
            side: 'end',
            handler: async () => await this._toastCtrl.dismiss(),
          },
        ],
        keyboardClose: true,
      };
      await this._displayMessage(this._toastCtrl, opts);
    }

  }
  
  private async _askFoEncryption() {
    const walletAddress = this._authService.account$.value;
    const {chainId, name: chainName} = this._authService.signer$.value.provider.network;
    const ionModal = await this._modalCtrl.create({
      component: SetupEncryptionComponent,
      cssClass: 'modalAlert',
      componentProps: {
        walletAddress,
        chainName
      },
    });
    await ionModal.present();
    const { data, role } = await ionModal.onDidDismiss();
    return {data, role};
  }

  private async _displayMessage<T>(
    ctrl: OverlayBaseController<T, any>,
    opts: any
  ) {
    const ctrlInstance = await ctrl.create(opts);
    await ctrlInstance.present();
    const { data, role } = await ctrlInstance.onDidDismiss();
    return { data, role };
  }
}