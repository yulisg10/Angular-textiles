import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../product.model';
import { ProductService } from '../../product-service/product.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})

export class UpdateFormComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService, 
  			  private route: ActivatedRoute) { }

  ngOnInit() {
  	this.getProduct();
  	//console.log(this.product);
  	//this.route.params.subscribe(res => console.log(res.id));
  }

  getProduct(): void {
	const id = +this.route.snapshot.paramMap.get('id');
	this.productService.getProduct(id).subscribe(product => this.product = product);
	console.log(this.product);
  }

 

  save(): void {
    this.productService.updateProduct(this.product).subscribe();

  }
}
