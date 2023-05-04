import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { AAVEComponent } from './aave.component';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { StrategyComponent } from './strategy.component';
import { LidoService } from './lido.service';
import { AAVEService } from './aave.service';

@NgModule({
  declarations: [
    AppComponent, 
    NxWelcomeComponent, 
    AAVEComponent,
    StrategyComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule.forRoot({
      mode: 'ios',
    }),
  ],
  providers: [
    LidoService,
    AAVEService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
