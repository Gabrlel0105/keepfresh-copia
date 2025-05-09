import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from '../../models/order.entity';
import {DatePipe, NgForOf, NgIf} from '@angular/common';
@Component({
  selector: 'app-order-item',
  imports: [
    NgForOf,
    NgIf,
    DatePipe
  ],
  templateUrl: './order-item.component.html',
  standalone: true,
  styleUrl: './order-item.component.css'
})
export class OrderItemComponent {

  @Input() order!: Order;
  @Output() edit = new EventEmitter<Order>();
  @Output() remove = new EventEmitter<number>();

  onEdit(): void{
    this.edit.emit(this.order)
  }

  onRemove(): void{
    this.remove.emit(this.order.id);
  }

}
