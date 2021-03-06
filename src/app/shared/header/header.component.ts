import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from '../../services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor( public infoService: InfoPaginaService, private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( texto: string ) {
    //if ( texto.length < 1 ) { return; }
    this.router.navigate( [ '/buscar', texto ] );
  }

}
