import { ProductosService } from './../_servicios/productos.service';
import { Producto } from './../_modelos/Producto';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Producto |undefined;
  id: any;    // Id pasada por parametro
  sub!: Subscription    // Suscripción

  constructor(private _Activatedroute: ActivatedRoute,
    private _router: Router,
    private srvProductos: ProductosService) {
  }


  ngOnInit() {
    this.sub = this._Activatedroute.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
      let products: Producto[] = this.srvProductos.getProducts();
      this.product = products.find(p => p.productID == this.id);
    });

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['products']);
  }

}
