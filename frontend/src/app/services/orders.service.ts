import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }
  
    getAllOrders(): Observable<IOrder[]> {
      return this.http.get<IOrder[]>('http://localhost:8080/orders');
    }
  
    createOrder(order: any): Observable<IOrder> {
      return this.http.post<any>('http://localhost:8080/orders', order);
    }
}
