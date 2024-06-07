import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { LineComponent } from './line/line.component';
import { LogoComponent } from './logo/logo.component';
import {BtnPerfilInteractionComponent} from './btn-perfil-interaction/btn-perfil-interaction.component';
import {InfoPerfilComponent} from './info-perfil/info-perfil.component'
import {NavComponent} from './nav/nav.component'

@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldComponent,
    PasswordFieldComponent,
    LineComponent,
    LogoComponent,
    BtnPerfilInteractionComponent,
    InfoPerfilComponent,
    NavComponent

  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    InputFieldComponent,
    PasswordFieldComponent,
    LineComponent,
    LogoComponent,
    BtnPerfilInteractionComponent,
    InfoPerfilComponent,
    NavComponent
  ]
})
export class SharedModule { }
