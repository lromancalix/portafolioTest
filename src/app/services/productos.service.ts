import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IProducto } from '../interfaces/producto.interface';
import { IDescrProducto } from '../interfaces/descr-producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: IProducto[] = [];
  productoFiltrado: IProducto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  cargarProductos() {
    return new Promise( ( resolve, reject ) => {

      this.http
              .get(`${ environment.url_service }/productos_idx.json`)
              .subscribe( (response: IProducto[]) => {
                this.cargando = false;
                this.productos = response;
                resolve();
               } );

    } );


  }

  obtenerProducto(id: string) {
    return this.http.get(`${ environment.url_service }/productos/${ id }.json`);
  }

  buscarProducto( termino: string ) {

    if ( termino.length === 0 ) {
      this.productoFiltrado = this.productos;
    } else {
      if ( this.productos.length === 0 ) {
        this.cargarProductos().then( () => {

            this.filtrarProductos( termino );
          } );
        } else {
            this.filtrarProductos( termino );
        }
    }
  }

  private filtrarProductos( termino: string ) {
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      const categoriaLower = prod.categoria.toLocaleLowerCase();
      if ( categoriaLower.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0 ) {
        this.productoFiltrado.push( prod );
      }
    } );
  }

}
