import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { TreeError } from '@angular/compiler';

@Component({
  selector: 'app-seach',
  templateUrl: './seach.component.html',
  styleUrls: ['./seach.component.scss']
})
export class SeachComponent implements OnInit {

  constructor(private route: ActivatedRoute, public prodService: ProductosService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.buscarProducto(params.termino);
    } );
  }

  buscarProducto( termino: string ) {
    this.prodService.buscarProducto(termino);
  }

}
