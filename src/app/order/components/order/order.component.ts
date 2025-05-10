import {Component, Input} from '@angular/core';
import {Order} from '../../models/order.entity';
import {MatCard, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {CommonModule, DatePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-order',
  imports: [
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardModule,
    MatCardContent,
    NgForOf,
    DatePipe
  ],
  templateUrl: './order.component.html',
  standalone: true,
  styleUrl: './order.component.css'
})
export class OrderComponent {
  @Input() order!: Order;

}
