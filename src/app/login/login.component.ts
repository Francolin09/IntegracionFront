import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  listadeusuarios: any[]=[];
  
  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(){
    this.http.get<any[]>('http://192.168.1.128:5000/usuarios').subscribe(respuesta => {
    this.listadeusuarios = respuesta;
  });
  }

  loguear()
  {
    let comprobacion = false
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const contrasena = (<HTMLInputElement>document.getElementById('contrasena')).value;       
    for (let i=0; i<this.listadeusuarios.length; i++)
    {
      if (this.listadeusuarios[i].correo_usuario===email && this.listadeusuarios[i].password===contrasena)
      {
        console.log("se logueó el pana")
        comprobacion = true
        this.router.navigate(['/inicio']);

        break;
      }
    }
    if (comprobacion == false){
      console.log("no existe el panita")
      event?.preventDefault();
    }
  }

  volver()
  {
    this.router.navigate(['/inicio']);
  }

}

