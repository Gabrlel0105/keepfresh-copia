import { Component } from '@angular/core';
import {OrderFormComponent} from './order/components/order-form/order-form.component';
import {OrderListComponent} from './order/components/order-list/order-list.component';
import {OrdersComponent} from './order/pages/orders/orders.component';


@Component({
  selector: 'app-root',
  imports: [
    OrderFormComponent,
    OrderListComponent,
    OrdersComponent,

  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KeepItFresh';

}
