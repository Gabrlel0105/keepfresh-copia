//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
//import {LoginOwnerComponent} from './public/pages/login/login-owner/login-owner.component';
//import {LoginWorkerComponent} from './public/pages/login/login-worker/login-worker.component';
//import {RegisterOwnerComponent} from './public/pages/login/register-user/register-owner/register-owner.component';
//import {RegisterWorkerComponent} from './public/pages/login/register-user/register-worker/register-worker.component';
//import {RecoverPasswordOwnerComponent} from './public/pages/login/recover-password-owner/recover-password-owner.component';
//import {RecoverPasswordWorkerComponent} from './public/pages/login/recover-password-worker/recover-password-worker.component';
import {RestoreWorkerComponent} from './public/pages/login/restore-worker/restore-worker.component';
import {RestoreOwnerComponent} from './public/pages/login/restore-owner/restore-owner.component';
import {ValidationComponent} from './public/pages/login/validation/validation.component';
import {HomeComponent} from './public/pages/home/home.component';

const PageNotFoundComponent = ()=> import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);
const OrdersComponent = ()=> import('./order/pages/orders/orders.component').then(m => m.OrdersComponent);
const InventoryComponent = () => import('./inventory/components/inventory-table/inventory-table.component').then(m => m.InventoryTable);
const LoginOwnerComponent = ()=> import('./public/pages/login/login-owner/login-owner.component').then(m => m.LoginOwnerComponent);
const LoginWorkerComponent = ()=> import('./public/pages/login/login-worker/login-worker.component').then(m => m.LoginWorkerComponent);
const RegisterOwnerComponent = ()=> import('./public/pages/login/register-user/register-owner/register-owner.component').then(m => m.RegisterOwnerComponent);
const RegisterWorkerComponent = ()=> import('./public/pages/login/register-user/register-worker/register-worker.component').then(m => m.RegisterWorkerComponent);
const RecoverPasswordOwnerComponent = ()=> import('./public/pages/login/recover-password-owner/recover-password-owner.component').then(m => m.RecoverPasswordOwnerComponent);
const RecoverPasswordWorkerComponent = ()=> import('./public/pages/login/recover-password-worker/recover-password-worker.component').then(m => m.RecoverPasswordWorkerComponent);

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orders', loadComponent: OrdersComponent},
  { path: 'products', loadComponent: InventoryComponent},
  {path : 'login-owner', loadComponent: LoginOwnerComponent},
  {path : 'login-worker', loadComponent: LoginWorkerComponent},
  {path: 'register-worker',loadComponent:RegisterWorkerComponent},
  {path: 'register-owner',loadComponent:RegisterOwnerComponent},
  {path: 'recover-password-worker',loadComponent:RecoverPasswordWorkerComponent},
  {path: 'recover-password-owner',loadComponent:RecoverPasswordOwnerComponent},
  {path: 'restore-owner',component:RestoreOwnerComponent},
  {path: 'restore-worker',component:RestoreWorkerComponent},
  {path: 'validation',component:ValidationComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', loadComponent: PageNotFoundComponent }
];
