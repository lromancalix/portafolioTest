import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/Info-paguina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPagina = {};
  cargada = false;

  constructor( private http: HttpClient ) {
    this.obtenerInfo();
   }


   obtenerInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;

      console.log('respuesta => ', this.info);

    } );
   }

}
