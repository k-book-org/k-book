import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';


const routes: Routes = [
  { path: 'auth', loadChildren: () => import('./core/auth/auth.module').then(m => m.AuthModule) },

  { path: 'login', component:LoginComponent },
  { path: 'registro', component:RegistroComponent },
  { path: 'perfil', component:PerfilComponent }

  { path: 'comunidad', loadChildren: () => import('./core/comunidad/comunidad.module').then(m => m.ComunidadModule) },

  { path: 'aprendizaje', loadChildren: () => import('./core/aprendizaje/aprendizaje.module').then(m => m.AprendizajeModule) },

  { path: 'funcionamiento', loadChildren: () => import('./core/funcionamiento/funcionamiento.module').then(m => m.FuncionamientoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
