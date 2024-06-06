import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { LineComponent } from './line/line.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldComponent,
    PasswordFieldComponent,
    LineComponent,
    LogoComponent,
    NavComponent,

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
    NavComponent,

  ]
})
export class SharedModule { }
