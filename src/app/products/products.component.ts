import { ProductosService } from './../_servicios/productos.service';
import { Component, OnInit } from '@angular/core';
import { Producto } from '../_modelos/Producto';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(public srvProductos: ProductosService) { }
  productos: Producto[] = [];

  ngOnInit(): void {
    this.productos = this.srvProductos.getProducts();
  }

}
