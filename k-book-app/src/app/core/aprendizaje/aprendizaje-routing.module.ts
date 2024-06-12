import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AprendizajeComponent } from './aprendizaje.component';
import { EspacioDeTrabajoComponent } from './espacio-de-trabajo/espacio-de-trabajo.component';

const routes: Routes = [
  { path: '', component: AprendizajeComponent },
  { path: 'espacio-de-trabajo', component: EspacioDeTrabajoComponent}
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AprendizajeRoutingModule { }
