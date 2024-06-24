import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActividadRoutingModule } from './actividad-routing.module';
import { ActividadComponent } from './actividad.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { SharedModule } from '../../components/components.module';
import { RespuestasComponent } from './respuestas/respuestas.component';


@NgModule({
  declarations: [
    ActividadComponent,
    PreguntasComponent,
    RespuestasComponent
  ],
  imports: [
    CommonModule,
    ActividadRoutingModule,
    SharedModule
  ]
})
export class ActividadModule { }
