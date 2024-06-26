import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../components/components.module';
import { RegistroComponent } from './registro/registro.component';
import{PerfilComponent}from './perfil/perfil.component';
import { SelectPorpouseComponent } from './select-porpouse/select-porpouse.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistroComponent,
    PerfilComponent,
    SelectPorpouseComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
