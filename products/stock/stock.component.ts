import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { ProductService } from '../product-service/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  	products: Product[];

  	selectedProduct: Product;

 	constructor(private productService: ProductService) { }

  	ngOnInit() {
  		this.getProducts();
  	}

  	getProducts(): void {
    	//Recibe Observable
    	this.productService.getProducts().subscribe(products => this.products = products);
  	}

	updateP(product: Product):void {
		this.selectedProduct = product;
	}

	deleteP(product: Product): void {
    this.products = this.products.filter(p => p !== product);
    this.productService.deleteProduct(product).subscribe();
  }
}
