import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },

  { path: 'comunidad', loadChildren: () => import('./core/comunidad/comunidad.module').then(m => m.ComunidadModule) },

  { path: 'aprendizaje', loadChildren: () => import('./core/aprendizaje/aprendizaje.module').then(m => m.AprendizajeModule) },

    { path: 'progreso', loadChildren: () => import('./core/progress/progress.module').then(m => m.ProgressModule) },
  { path: 'actividad', loadChildren: () => import('./core/actividad/actividad.module').then(m => m.ActividadModule) },
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