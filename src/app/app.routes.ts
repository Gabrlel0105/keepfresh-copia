import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from "@angular/router";
import {LoginOwnerComponent} from './public/pages/login/login-owner/login-owner.component';
import {LoginWorkerComponent} from './public/pages/login/login-worker/login-worker.component';
import {RegisterOwnerComponent} from './public/pages/login/register-user/register-owner/register-owner.component';
import {RegisterWorkerComponent} from './public/pages/login/register-user/register-worker/register-worker.component';
import {RecoverPasswordOwnerComponent} from './public/pages/login/recover-password-owner/recover-password-owner.component';
import {RecoverPasswordWorkerComponent} from './public/pages/login/recover-password-worker/recover-password-worker.component';
import {RestoreWorkerComponent} from './public/pages/login/restore-worker/restore-worker.component';
import {RestoreOwnerComponent} from './public/pages/login/restore-owner/restore-owner.component';
import {ValidationComponent} from './public/pages/login/validation/validation.component';

const PageNotFoundComponent = ()=> import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);

export const routes: Routes = [
  {path : 'login-owner', component: LoginOwnerComponent},
  {path : 'login-worker', component: LoginWorkerComponent},
  {path: 'register-worker',component:RegisterWorkerComponent},
  {path: 'register-owner',component:RegisterOwnerComponent},
  {path: 'recover-password-worker',component:RecoverPasswordWorkerComponent},
  {path: 'recover-password-owner',component:RecoverPasswordOwnerComponent},
  {path: 'restore-owner',component:RestoreOwnerComponent},
  {path: 'restore-worker',component:RestoreWorkerComponent},
  {path: 'validation',component:ValidationComponent},

  { path: '', redirectTo: 'login-owner', pathMatch: 'full' },
  { path: '**', loadComponent: PageNotFoundComponent }
];
