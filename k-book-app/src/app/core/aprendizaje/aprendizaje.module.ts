import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprendizajeRoutingModule } from './aprendizaje-routing.module';
import { AprendizajeComponent } from './aprendizaje.component';
import { EspacioDeTrabajoComponent } from './espacio-de-trabajo/espacio-de-trabajo.component';


@NgModule({
  declarations: [
    AprendizajeComponent,
    EspacioDeTrabajoComponent
  ],
  imports: [
    CommonModule,
    AprendizajeRoutingModule
  ]
})
export class AprendizajeModule { }
