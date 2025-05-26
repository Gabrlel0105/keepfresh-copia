import { Component } from '@angular/core';
import {LossAnalyticsComponent} from '../../../analytics/components/loss-analytics/loss-analytics.component';
import {
  OrderPieAnalyticsComponent
} from '../../../analytics/components/order-pie-analytics/order-pie-analytics.component';
import {OrdersAnalyticsComponent} from '../../../analytics/components/orders-analytics/orders-analytics.component';
import {ProfitsAnalyticsComponent} from '../../../analytics/components/profits-analytics/profits-analytics.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    LossAnalyticsComponent,
    OrderPieAnalyticsComponent,
    OrdersAnalyticsComponent,
    ProfitsAnalyticsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
