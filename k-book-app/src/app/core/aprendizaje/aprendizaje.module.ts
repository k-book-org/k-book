import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprendizajeRoutingModule } from './aprendizaje-routing.module';
import { AprendizajeComponent } from './aprendizaje.component';


@NgModule({
  declarations: [
    AprendizajeComponent
  ],
  imports: [
    CommonModule,
    AprendizajeRoutingModule
  ]
})
export class AprendizajeModule { }
