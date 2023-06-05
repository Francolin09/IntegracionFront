import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // esto es para que funcionen los formularios y sus funciones
import { HttpClientModule } from '@angular/common/http'; // para realizar peticiones
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// importación de librería para evitar interfáz gráfica de barra de herramientas Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { EntregableComponent } from './entregable/entregable.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    InicioComponent,
    InstrumentosComponent,
    EntregableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // importacion de librerias para quitar barra de herramientas angular
    HttpClientModule, // importación para hacer peticiones
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
