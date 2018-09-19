import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  public menuItems: any;
  public items: any;

  constructor() { }

  ngOnInit() {
    this.items = [];
    this.menuItems = [
      {foodItem: 'Dal Makhani', price: 12.99},
      {foodItem: 'Chana Masala', price: 12.99},
      {foodItem: 'Saag Paneer', price: 12.99},
      {foodItem: 'Paneer Butter Masala', price: 12.99},
      {foodItem: 'Lamb/Goat Vindaloo', price: 14.99},
      {foodItem: 'Lamb/Goat Tikka Masala', price: 14.99},
      {foodItem: 'Andhra Style Chicken Curry ', price: 12.99},
      {foodItem: 'Chicken Chettinad', price: 12.99},
      {foodItem: 'Chicken Tikka Masala', price: 12.99},
      {foodItem: 'Butter Chicken', price: 12.99},
      {foodItem: 'Andhra Chapala Pulusu', price: 12.99}
      ];
    console.log(this.menuItems);
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
    var self = this;
    this.menuItems.forEach(function(menuItem) {
      menuItem.quantity = form['q.' + menuItem.foodItem];
      menuItem.spiceLevel = form['s.' + menuItem.foodItem];
      if (form['q.' + menuItem.foodItem] !== '')
        self.items.push(menuItem);
    });
    console.log('you submitted order:', this.items);
  }

}

