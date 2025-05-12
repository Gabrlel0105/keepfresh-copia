import { Component } from '@angular/core';
import {OrderListComponent} from '../../../order/components/order-list/order-list.component';
import {CommonModule} from '@angular/common';
import {
  NotificationListComponent
} from '../../../notification/components/notification-list/notification-list.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
