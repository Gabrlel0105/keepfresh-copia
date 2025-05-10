import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from '../model/product-entity';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(environment.serverBaseUrlProducts);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(environment.serverBaseUrlProducts, product);
  }
}
