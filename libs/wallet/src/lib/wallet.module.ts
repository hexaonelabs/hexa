import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { walletRoutes } from './lib.routes';
import { WalletPageComponent } from './containers/wallet-page/wallet-page.component';
import { IonicModule } from '@ionic/angular';
import { ItemsContainerComponent } from './components/items-container/items-container.component';
import { NetWorthPipe } from './pipes/net-worth.pipe';
import { SliceAddressPipe } from './pipes/slice-address.pipe';
import { AssetsTypePipe } from './pipes/assets-type.pipe';
import { WalletService } from './services/wallet.service';
import { DiffPercentPipe } from './pipes/diff-percent.pipe';
import { AvatarDirective } from './directives/avatar.directive';
import { SwapAssetsModalComponent } from './components/swap-assets-modal/swap-assets-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    WalletPageComponent,
    ItemsContainerComponent,
    SwapAssetsModalComponent,
    AvatarDirective,
    NetWorthPipe,
    SliceAddressPipe,
    AssetsTypePipe,
    DiffPercentPipe,
  ],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule.forChild(walletRoutes),
    ReactiveFormsModule
  ],
  providers: [
    WalletService
  ]
})
export class WalletModule {}
