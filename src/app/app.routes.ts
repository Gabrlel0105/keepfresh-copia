import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';

const PageNotFoundComponent = ()=> import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);
const OrdersComponent = ()=> import('./order/pages/orders/orders.component').then(m => m.OrdersComponent);
const InventoryComponent = () => import('./inventory/components/inventory-table/inventory-table.component').then(m => m.InventoryTable);

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orders', loadComponent: OrdersComponent},
  { path: 'products', loadComponent: InventoryComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', loadComponent: PageNotFoundComponent }
];
