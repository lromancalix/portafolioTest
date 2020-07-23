import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { IDescrProducto } from 'src/app/interfaces/descr-producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  public descProducto: IDescrProducto;
  idProducto: string;
  constructor(private route: ActivatedRoute,
              public prodService: ProductosService ) {   }

  ngOnInit() {
    this.route.params
    .subscribe( params => {
      this.prodService.obtenerProducto(params.id)
            .subscribe( ( product: IDescrProducto ) => {
             this.idProducto = params.id;
             this.descProducto = product;
            } );
    } );
  }



}
