import { Routes } from '@angular/router';
import {OrdersComponent} from './order/pages/orders/orders.component';

const PageNotFoundComponent = ()=> import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);

export const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', loadComponent: PageNotFoundComponent }
];
