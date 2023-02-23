import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { authRoutes } from './lib.routes';
import { LoginPageComponent } from './containers/login/login-page.component';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    CommonModule, 
    IonicModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule {}
