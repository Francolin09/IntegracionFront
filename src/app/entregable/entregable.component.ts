import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entregable',
  templateUrl: './entregable.component.html',
  styleUrls: ['./entregable.component.css']
})
export class EntregableComponent {

  apidesaludo: any;
  apidesaldo: any;

  constructor(private http: HttpClient) {}

  async consultapi(){

    const respuesta = await this.http.get<any[]>('https://musicpro.bemtorres.win/api/v1/test/saludo').toPromise();
    this.apidesaludo = respuesta;
    const valordemiinput = document.getElementById('id_prueba') as HTMLInputElement;
    valordemiinput.value = this.apidesaludo['message'];
    console.log(this.apidesaludo)
  }
  
  async consultapi2(){
    const respuesta = await this.http.get<any[]>('https://musicpro.bemtorres.win/api/v1/test/saldo').toPromise();
    this.apidesaldo = respuesta;
    const message = document.getElementById('id_prueba2') as HTMLInputElement;
    const saldo = document.getElementById('id_prueba3') as HTMLInputElement;
    const saldo_raw = document.getElementById('id_prueba4') as HTMLInputElement;
    message.value = this.apidesaldo['message'];
    saldo.value = this.apidesaldo['saldo'];
    saldo_raw.value = this.apidesaldo['saldo_raw'];
    const inputfinal = document.getElementById('id_prueba5') as HTMLInputElement;
    const manipular = 'La api respondío el mensaje "' +this.apidesaldo['message']+ '" con el saldo de: "'+this.apidesaldo['saldo']+ '" y saldo_raw de: "'+this.apidesaldo['saldo_raw']+'"';
    inputfinal.value = manipular;
    console.log(this.apidesaldo)

  }
  
}
