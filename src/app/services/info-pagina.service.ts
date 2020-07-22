import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/Info-paguina.interface';
import { IEquipo } from '../interfaces/equipo.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  public info: InfoPagina = {};
  public equipo: IEquipo[];
  cargada = false;

  constructor( private http: HttpClient ) {
   
   }


   obtenerInfo() {
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    } );
   }

   obtenerEquipo() {

     return this.http.get( `${environment.url_service}/equipo.json` )
            .subscribe( (response: any) => {
              this.equipo = response;
              console.log(response);
            } ) ;
   }

}
