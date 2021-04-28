import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ResetPasswordComponent} from './component/reset-password/reset-password.component';
@NgModule({
  declarations: [LoginComponent, RegisterComponent,ResetPasswordComponent],
  imports: [
    
    CommonModule,
    AuthRoutingModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    LoginComponent, RegisterComponent,ResetPasswordComponent

  ]
})
export class AuthModule { }
