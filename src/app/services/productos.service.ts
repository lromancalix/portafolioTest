import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: IProducto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  cargarProductos() {
    this.http
            .get(`${environment.url_service}/productos_idx.json`)
            .subscribe( (response: IProducto[]) => {
              this.cargando = false;
              this.productos = response;
              console.log(this.productos);
             } );
  }
}
