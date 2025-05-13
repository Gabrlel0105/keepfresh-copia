import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // IMPORTANTE
import {OrderFormComponent} from './order/components/order-form/order-form.component';
import {OrderListComponent} from './order/components/order-list/order-list.component';
import {OrdersComponent} from './order/pages/orders/orders.component';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {SideNavigationBarComponent} from './public/components/side-navigation-bar/side-navigation-bar.component';
import {ToolbarComponent} from './public/components/toolbar/toolbar.component';
import {RouterOutlet} from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [
    MatSidenavModule,
    //OrderFormComponent,
    //OrdersComponent,
    MatSidenavContainer,
    SideNavigationBarComponent,
    ToolbarComponent,
    RouterOutlet,
    MatSidenav,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'KeepItFresh';
  mobileView = window.innerWidth < 768;

  constructor() {
    window.addEventListener('resize', () => {
      this.mobileView = window.innerWidth < 768;
    });
  }
}
