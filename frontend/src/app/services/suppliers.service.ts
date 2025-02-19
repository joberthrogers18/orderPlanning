import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Supplier from '../models/Supplier';
import { SupplierBody } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http: HttpClient) { }

  getAllSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>('http://localhost:8080/suppliers');
  }

  createSupplier(supplier: SupplierBody): Observable<Supplier> {
    return this.http.post<Supplier>('http://localhost:8080/suppliers', supplier);
  }
}
