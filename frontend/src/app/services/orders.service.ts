import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  
    getAllOrders(): Observable<any> {
      return this.http.get<any>('http://localhost:8080/orders');
    }
  
    createOrder(order: any): Observable<any> {
      return this.http.post<any>('http://localhost:8080/orders', order);
    }
}
