import {Component, OnInit} from '@angular/core';
import {Order} from '../../models/order.entity';
import {OrderService} from '../../services/order.service';
import {NgForOf, NgIf} from '@angular/common';
import {OrderItemComponent} from '../order-item/order-item.component';

@Component({
  selector: 'app-order-list',
  imports: [
    NgForOf,
    OrderItemComponent,
    NgIf
  ],
  templateUrl: './order-list.component.html',
  standalone: true,
  styleUrl: './order-list.component.css'
})
export class OrderListComponent implements OnInit{

  orders: Order[] = [];

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  editOrder(order: Order): void {
    // In a real application, you might navigate to an edit page
    // or open a modal to edit the order
    console.log('Edit order:', order);
    alert(`Editing order for table ${order.tableNumber} is not implemented yet.`);
  }

  removeOrder(id: number): void {
    if (confirm('Are you sure you want to remove this order?')) {
      this.orderService.removeOrder(id);
    }
  }
}
