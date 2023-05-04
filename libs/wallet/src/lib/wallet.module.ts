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
import { QRcodePipe } from './pipes/qrcode.pipe';
import { SwapeServiceStrategy } from './services/swap-service.strategy';
import { getInjectionToken, TOKENS_NAME } from '@hexa/token-injection';
import { localWalletApiFactory } from './factories/local.factory';
import { ankrFactory } from './factories/ankr.factory';
import { UiModule } from '@hexa/ui';
import { LidoService } from './services/lido.service';
import { AAVEService } from './services/aave.service';
import { StrategyComponent } from './components/strategy/strategy.component';

@NgModule({
  declarations: [
    WalletPageComponent,
    ItemsContainerComponent,
    SwapAssetsModalComponent,
    StrategyComponent,
    AvatarDirective,
    NetWorthPipe,
    SliceAddressPipe,
    AssetsTypePipe,
    DiffPercentPipe,
    QRcodePipe,
  ],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule.forChild(walletRoutes),
    ReactiveFormsModule,
    UiModule
  ],
  providers: [
    {
      provide: getInjectionToken(TOKENS_NAME.APP_WALLET_UTILS),
      useFactory: (isProd: boolean) => {
        return (!isProd)
          ? ankrFactory()
          : ankrFactory()
      },
      deps: [
        getInjectionToken(TOKENS_NAME.APP_IS_PROD)
      ]
    },
    WalletService,
    SwapeServiceStrategy,
    LidoService,
    AAVEService,
  ]
})
export class WalletModule {}
