import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  public orderData: any;

  constructor(private svc: OrdersService) {}

  ngOnInit() {
    this.svc.getOrders().subscribe(data => {
      this.orderData = data;
    });
    console.log(this.orderData);
  }
}
