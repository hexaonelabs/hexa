import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { UIHeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    UIHeaderComponent
  ],
  exports: [
    UIHeaderComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
})
export class UiModule {}
