import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComunidadRoutingModule } from './comunidad-routing.module';
import { ComunidadComponent } from './comunidad.component';
import { PreguntarComponent } from './preguntar/preguntar.component';
import { SharedModule } from '../../components/components.module';


@NgModule({
  declarations: [
    ComunidadComponent,
    PreguntarComponent
  ],
  imports: [
    CommonModule,
    ComunidadRoutingModule,
    SharedModule
  ]
})
export class ComunidadModule { }
