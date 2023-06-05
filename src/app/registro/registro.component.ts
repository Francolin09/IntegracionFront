import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

class Nuevo {
  constructor(
    public rut: string,
    public nombre_usuario: string,
    public correo_usuario: string,
    public password: string
  ) {}
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  listadeusuarios: any[]=[];
  
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(){
    this.http.get<any[]>('http://192.168.1.128:5000/usuarios').subscribe(respuesta => {
    this.listadeusuarios = respuesta;
  });
  }

  registrar(){
    const correo_usuario = (<HTMLInputElement>document.getElementById('email')).value;
    const nombre_usuario = (<HTMLInputElement>document.getElementById('nombre')).value;
    const password = (<HTMLInputElement>document.getElementById('contrasena')).value;
    const rut = (<HTMLInputElement>document.getElementById('rut')).value; 
    
    const usuario = new Nuevo(rut, nombre_usuario,correo_usuario, password);
    const url = 'http://192.168.1.128:5000/usuarios';
    const body = JSON.stringify(usuario);
    const headers = { 'Content-Type': 'application/json' };
    this.router.navigate(['/inicio']);
    this.http.post(url, body,{headers}).subscribe(respuesta => {
    console.log(respuesta);
    });


  }

}
