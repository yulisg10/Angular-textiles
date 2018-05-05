import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Product } from '../products/product.model';
import { ProductService } from '../products/product-service/product.service';



@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  
  product: Product;
  productSelected: Product;

  @Input() productShop: Array<Product>;
  //@Output() AddedBill = new EventEmitter<Array<Product>>();
  

  constructor(private activateRoute: ActivatedRoute) { }

  totalP: number;

  ngOnInit() {
     let arreglo = this.activateRoute.snapshot.paramMap.get('productos');
  }

  // getProduct(): void{
  //   const id=+this.route.snapshot.paramMap.get('id');
  //   this.productService.getProduct(id)
  //   .subscribe(product => this.product = product);
  // }

  incrementAmount(product: Product): void {
    this.productSelected = product;
    this.productSelected.cantProduct++;
    this.calculateTotal(this.productSelected);
  }

  decrementAmount(product: Product): void {

    if(this.productSelected.cantProduct > 1){
      this.productSelected.cantProduct--;
      this.calculateTotal(this.productSelected);
    }
  }

  calculateTotal(product: Product): void{

  this.productSelected = product;
  this.productSelected.totalPrice = this.productSelected.cantProduct * this.productSelected.price;
}

  
  //Evento para actualizar cantidad desde el Input
  onkey(event: any, product: Product){
    this.productSelected = product;
    this.productSelected.cantProduct= event.target.value;
    this.calculateTotal(this.productSelected);
    console.log(this.productSelected);
  }

   i: number; //Contador

  //Acciones de la Tabla
  deleteItem(product: Product):void{
    let pos = this.productShop.indexOf(product);
    this.productShop.splice(pos, 1);
    console.log(this.productShop);
   
  }

/*
  total(): void{
      for (let p of this.productShop) {
        this.totalP += p.totalPrice;
      }
  }*/

  // sendBill():void {
  //   this.AddedBill.emit(this.productShop);
  // }
}
