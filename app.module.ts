import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { AppRoutingModule } from './app-routing.module';

import { ProductService} from './products/product-service/product.service';
import { ProductBillComponent } from './products/product-bill/product-bill.component';
import { UserComponent } from './user/user.component';
import { StockComponent } from './products/stock/stock.component';
import { ProductFormComponent } from './products/stock/product-form/product-form.component';
import { UpdateFormComponent } from './products/stock/update-form/update-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ProductBillComponent,
    UserComponent,
    StockComponent,
    ProductFormComponent,
    UpdateFormComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
