import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EspacioDeTrabajoComponent } from './core/aprendizaje/espacio-de-trabajo/espacio-de-trabajo.component';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },

  { path: 'comunidad', loadChildren: () => import('./core/comunidad/comunidad.module').then(m => m.ComunidadModule) },

  { path: 'aprendizaje', loadChildren: () => import('./core/aprendizaje/aprendizaje.module').then(m => m.AprendizajeModule) },

  { path: 'funcionamiento', loadChildren: () => import('./core/funcionamiento/funcionamiento.module').then(m => m.FuncionamientoModule) },
  { path: 'progreso', loadChildren: () => import('./core/progress/progress.module').then(m => m.ProgressModule) }
  {path: 'espacio-de-trabajo', component: EspacioDeTrabajoComponent}
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }