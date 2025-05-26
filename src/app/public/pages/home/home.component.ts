import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  NotificationListComponent
} from '../../../notification/components/notification-list/notification-list.component';
import {OrdersAnalyticsComponent} from '../../../analytics/components/orders-analytics/orders-analytics.component';
import {
  OrderPieAnalyticsComponent
} from '../../../analytics/components/order-pie-analytics/order-pie-analytics.component';
import {ProfitsAnalyticsComponent} from '../../../analytics/components/profits-analytics/profits-analytics.component';
import {LossAnalyticsComponent} from '../../../analytics/components/loss-analytics/loss-analytics.component';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    OrdersAnalyticsComponent,
    OrderPieAnalyticsComponent,
    ProfitsAnalyticsComponent,
    LossAnalyticsComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
