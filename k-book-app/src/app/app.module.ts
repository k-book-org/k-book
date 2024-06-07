import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SharedModule } from './shared/shared.module';
import { PerfilComponent } from './perfil/perfil.component'; 


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    RegistroComponent,
    PerfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
