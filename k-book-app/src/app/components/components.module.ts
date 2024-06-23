import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { PasswordFieldComponent } from './password-field/password-field.component';
import { LineComponent } from './line/line.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { InfoPerfilComponent } from './info-perfil/info-perfil.component';
import { BtnPerfilInteractionComponent } from './btn-perfil-interaction/btn-perfil-interaction.component';
import { EditFieldInputComponent } from './edit-field-input/edit-field-input.component';
import { UserstadisticsComponent } from './userstadistics/userstadistics.component';
import { ItemPreguntaComponent } from './item-pregunta/item-pregunta.component';
import { MiniBuscadorComponent } from './mini-buscador/mini-buscador.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { EtiquetaComponent } from './etiqueta/etiqueta.component';

@NgModule({
  declarations: [
    ButtonComponent,
    InputFieldComponent,
    PasswordFieldComponent,
    LineComponent,
    LogoComponent,
    NavComponent,
    InfoPerfilComponent,
    BtnPerfilInteractionComponent,
    EditFieldInputComponent,
    UserstadisticsComponent,
    ItemPreguntaComponent,
    MiniBuscadorComponent,
    BuscadorComponent,
    EtiquetaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule 
  ],
  exports: [
    ButtonComponent,
    InputFieldComponent,
    PasswordFieldComponent,
    LineComponent,
    LogoComponent,
    NavComponent,
    InfoPerfilComponent,
    BtnPerfilInteractionComponent,
    EditFieldInputComponent,
    UserstadisticsComponent,
    ItemPreguntaComponent,
    MiniBuscadorComponent,
    BuscadorComponent,
  ]
})
export class SharedModule { }
