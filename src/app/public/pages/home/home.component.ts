import { Component } from '@angular/core';
import {OrderListComponent} from '../../../order/components/order-list/order-list.component';

@Component({
  selector: 'app-home',
  imports: [
    OrderListComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
