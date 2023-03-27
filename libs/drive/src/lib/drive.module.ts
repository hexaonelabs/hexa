import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { driveRoutes } from './lib.routes';
import { IonicModule } from '@ionic/angular';
import { DrivePageComponent } from './containers/drive-page/drive-page.component';
import { ItemsContainerComponent } from './components/items-container/items-container.component';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { MediaFileService } from './services/mediafile.service';
import { DropableDirective } from './directives/dropable.directive';
import { DropableComponent } from './components/dropable/dropable.component';
import { ItemPreviewComponent } from './components/item-preview/item-preview.component';
import { SelectFolderComponent } from './components/select-folder/select-folder.component';
import { SetupEncryptionComponent } from './components/setup-encryption/setup-encryption.component';
import { FilesOptionsListComponent } from './components/files-options-list/files-options-list.component';
import { SafePipe } from './pipes/safe.pipe';
import { BytesToSizePipe } from './pipes/bytes-to-size.pipe';
import { IsSharePipe } from './pipes/is-shared.pipe';
import { PreviewFilePipe } from './pipes/preview-file.pipe';
import { SliceAddressPipe } from './pipes/slice-address.pipe';
import { TotalStoragePipe } from './pipes/total-storage.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { UiModule } from '@d-workspace/ui';

@NgModule({
  declarations: [
    DrivePageComponent,
    ItemsContainerComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    DropableComponent,
    ItemPreviewComponent,
    SelectFolderComponent,
    SetupEncryptionComponent,
    FilesOptionsListComponent,
    DropableDirective,
    SafePipe,
    BytesToSizePipe,
    IsSharePipe,
    PreviewFilePipe,
    SliceAddressPipe,
    TotalStoragePipe,
  ],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule.forChild(driveRoutes),
    ReactiveFormsModule,
    UiModule
  ],
  providers: [
    MediaFileService,
  ],
})
export class DriveModule {}
