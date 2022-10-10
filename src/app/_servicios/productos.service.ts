import { Producto } from './../_modelos/Producto';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor() { }

  public getProducts():Producto[] {
    let products: Producto[];
    products = [
      new Producto(1, 'Memory Card', 500),
      new Producto(2, 'Pen Drive', 750),
      new Producto(3, 'Power Bank', 100)
    ]

    return products;
  }


  public getProduct(id: number) {
    let products: Producto[] = this.getProducts();
    return products.find(p => p.productID == id);
  }

}
