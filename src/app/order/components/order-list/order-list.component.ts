import {Component, Input} from '@angular/core';
import {Order} from '../../models/order.entity';
import {OrderComponent} from '../order/order.component';
import {CommonModule, NgForOf} from '@angular/common';

@Component({
  selector: 'app-order-list',
  imports: [
    OrderComponent,
    NgForOf,
    CommonModule
  ],
  templateUrl: './order-list.component.html',
  standalone: true,
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  @Input() orders: Order[] = [];

  trackById(index: number, order: Order): number | undefined {
    return order.id;
  }
}
