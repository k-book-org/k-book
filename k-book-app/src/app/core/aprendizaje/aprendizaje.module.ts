import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AprendizajeRoutingModule } from './aprendizaje-routing.module';
import { AprendizajeComponent } from './aprendizaje.component';
import { EspacioDeTrabajoComponent } from './espacio-de-trabajo/espacio-de-trabajo.component';
import { DocumentacionComponent } from './espacio-de-trabajo/documentacion/documentacion.component';
import { EditorComponent } from './espacio-de-trabajo/editor/editor.component';
import { AppOutputComponent } from './espacio-de-trabajo/output/output.component';
import { NavbarComponent } from './espacio-de-trabajo/navbar/navbar.component';
import { EjerciciosComponent } from './espacio-de-trabajo/ejercicios/ejercicios.component';
 
@NgModule({
  declarations: [
    AprendizajeComponent,
    EspacioDeTrabajoComponent,
    DocumentacionComponent,
    EditorComponent,
    AppOutputComponent,
    NavbarComponent,
    EjerciciosComponent
  ],
  imports: [
    CommonModule,
    AprendizajeRoutingModule
  ]
})
export class AprendizajeModule { }
