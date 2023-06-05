import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { InstrumentosComponent } from './instrumentos/instrumentos.component';
import { EntregableComponent } from './entregable/entregable.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'instrumentos', component: InstrumentosComponent},
  { path: 'entregable', component: EntregableComponent},
  { path: '**', redirectTo: 'inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
