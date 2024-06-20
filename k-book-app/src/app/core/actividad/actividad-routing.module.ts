import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadComponent } from './actividad.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

const routes: Routes = [{ path: 'preguntas', component: PreguntasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActividadRoutingModule { }
