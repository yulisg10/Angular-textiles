import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductBillComponent } from './products/product-bill/product-bill.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { StockComponent } from './products/stock/stock.component';
import { ProductFormComponent } from './products/stock/product-form/product-form.component';
import { UpdateFormComponent } from './products/stock/update-form/update-form.component';

import { Product } from './products/product.model';


const routes: Routes = [ { path: 'products', component: ProductsComponent },
                         { path: 'product-list', component: ProductListComponent },
                         { path: 'product-detail', component: ProductDetailComponent },
                         { path: 'product-item', component: ProductItemComponent },
                         { path: 'product-bill', component: ProductBillComponent },
                         { path: 'shopping-list/:productos', component: ShoppingListComponent },
                         { path: 'product-form', component: ProductFormComponent },
                         { path: 'update-form', component: UpdateFormComponent},
                         { path: 'stock', component: StockComponent }
                       ];

@NgModule({
  exports: [RouterModule],

  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
