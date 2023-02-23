import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { welcomeRoutes } from './lib.routes';
import { WelcomePageComponent } from './containers/welcome-page/welcome-page.component';
import { CurrentTimeComponent } from './components/current-time/current-time.component';
import { BackgroundComponent } from './components/background/background.component';

@NgModule({
  declarations: [
    WelcomePageComponent,
    CurrentTimeComponent,
    BackgroundComponent
  ],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule.forChild(welcomeRoutes)
  ],
})
export class WelcomeModule {}
