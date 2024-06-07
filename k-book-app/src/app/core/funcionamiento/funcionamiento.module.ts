import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionamientoRoutingModule } from './funcionamiento-routing.module';
import { FuncionamientoComponent } from './funcionamiento.component';


@NgModule({
  declarations: [
    FuncionamientoComponent
  ],
  imports: [
    CommonModule,
    FuncionamientoRoutingModule
  ]
})
export class FuncionamientoModule { }
