import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Buyer from '../models/Buyer';
import { BuyerBody } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class BuyersService {

  constructor(private http: HttpClient) { }

  getAllBuyers(): Observable<Buyer[]> {
    return this.http.get<Buyer[]>('http://localhost:8080/buyers');
  }

  createBuyer(buyer: BuyerBody): Observable<Buyer> {
    return this.http.post<Buyer>('http://localhost:8080/buyers', buyer);
  }
}
