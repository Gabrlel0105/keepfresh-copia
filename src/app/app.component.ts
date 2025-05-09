import { Component } from '@angular/core';
import {OrderFormComponent} from './order/components/order-form/order-form.component';


@Component({
  selector: 'app-root',
  imports: [
    OrderFormComponent,

  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KeepItFresh';

}
