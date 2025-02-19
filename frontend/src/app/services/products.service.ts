import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from '../models/Product';
import { ProductBody } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8080/products');
  }

  createProduct(product: ProductBody): Observable<Product> {
    return this.http.post<Product>('http://localhost:8080/products', product);
  }
}
