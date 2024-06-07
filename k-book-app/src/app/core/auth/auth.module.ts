import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../components/components.module';
import { RegistroComponent } from './registro/registro.component';
import{PerfilComponent}from './perfil/perfil.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule { }
