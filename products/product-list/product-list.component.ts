import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../product.model';
import { ProductService } from '../product-service/product.service';
import { Router } from '@angular/router';

//import { PRODUCTS } from '../mock-products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

//  selectedProduct: Product;
//  @Output() productWasSelected = new EventEmitter<Product>();

  //Recibe los datos de prueba junto con el Modelo Product
  products: Product[];

  productSelected: Product;

  @Input() productItem: Product;
 

  productArray: Array<Product> = [];

  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit() {
    this.getProducts();
  }

  recibirItem(product: Product): void{
    let pos = this.productArray.indexOf(product);

    //Validación para no agregar el dato dos veces en la tabla Shopping
    if(!this.productArray[pos]){
       this.productArray.push(product);  
    }

    console.log(this.productArray);
  }


irAcarrito(): void{
    this.router.navigate(['/shopping-list', this.productArray]);
}


  getProducts(): void {
    //Recibe Observable
    this.productService.getProducts().subscribe(products => this.products = products);
  }

 
 
}
