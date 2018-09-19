import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private listOrdersUrl = 'https://floating-crag-14918.herokuapp.com/api/orders';
  private createOrdersUrl = 'https://floating-crag-14918.herokuapp.com/api/order/create';
  constructor(private http: HttpClient) { }

  getOrders(): Observable<any> {
    return this.http.get<any>(this.listOrdersUrl);
  }
  createOrder(items): Observable<any> {
    return this.http.post<any>(this.createOrdersUrl, items);
  }
}
