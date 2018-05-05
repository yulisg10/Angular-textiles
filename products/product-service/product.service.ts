import { Injectable } from '@angular/core';

import { Product } from '../product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductService {

  //private productsUrl = 'http://192.168.0.27/testBackend/public/index.php/products';
  private productsUrl = 'http://localhost:8000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(products => this.log('fetchet products')),
        catchError(this.handleError('getProducts', []))
      ); //Captura Error
  }

  /* GET: Captura el dato por ID, sino lo encuentra genera error 404 */
  getProduct(id: number): Observable<Product> {
    const url = '${this.productsUrl}/${id}';
    return this.http.get<Product>(url).pipe(
      tap(_ => this.log('fetched product id=${id}')),
      catchError(this.handleError<Product>('getProduct id=${id}'))
    );
  }

    /** PUT: Actualiza los daots del producto del servidor*/
  updateProduct (product: Product): Observable<any> {
    return this.http.put(this.productsUrl, product, httpOptions).pipe(
      tap(_ => this.log('updated product id=${product.id}')),
      catchError(this.handleError<any>('updateProduct'))
    );
  }

    /** POST: Crea los datos del producto del servidor */
  addProduct (product: Product): Observable<Product> {
    return this.http.post<Product>(this.productsUrl, product, httpOptions).pipe(
      tap((product: Product) => this.log('added product w/ id=${product.id}')),
      catchError(this.handleError<Product>('addProduct'))
    );
  }

    /** DELETE: Borra los datos del producto del servidor por ID */
  deleteProduct (product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.productsUrl}/${id}`;

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => this.log('deleted product id=${id}')),
      catchError(this.handleError<Product>('deleteProduct'))
    );
  }

/*
    /* GET: Se consulta los datos del producto por medio del Buscador
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // Si no existe dato, muestra vacío
      return of([]);
    }
    return this.http.get<Product[]>('api/products/?name=${term}').pipe(
      tap(_ => this.log('found products matching "${term}"')),
      catchError(this.handleError<Product[]>('searchProducts', []))
    );
  }
  */

  /*
  * Manejo cuando el HTTP falla
  * Permite a la aplicación continuar
  * @param operation - nombre de la operación que fallo
  * @param result - valor opcional para devolver la respuesta al Observable
  */
  private handleError<T> (operation = 'operation', result?:T){
    return (error: any): Observable<T> => {

      //TODO: envia el error a una infraestructura remoto
      console.error(error);

      //TODO: transformar el error para consumir
      this.log(' ${operation} failed: ${error.message} ');

      //TODO: mantener la app corriendo retornando un resultado vacío
      return of(result as T);
    }
  }

  private log(message: string){}

}
