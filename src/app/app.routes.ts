import { Routes } from '@angular/router';
import {HomeComponent} from './public/pages/home/home.component';
import {LoginOwnerComponent} from './public/pages/login/login-owner/login-owner.component';
import {LoginWorkerComponent} from './public/pages/login/login-worker/login-worker.component';
import{RecoverPasswordOwnerComponent} from './public/pages/login/recover-password-owner/recover-password-owner.component';

import {RecoverPasswordWorkerComponent} from './public/pages/login/recover-password-worker/recover-password-worker.component';
import {RegisterOwnerComponent} from './public/pages/login/register-user/register-owner/register-owner.component';
import {ValidationComponent} from './public/pages/login/validation/validation.component';
const PageNotFoundComponent = ()=> import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent);

export const routes: Routes = [
  {path : 'login-owner', component: LoginOwnerComponent},
  {path : 'login-worker', component: LoginWorkerComponent},
  {path : 'recover-password', component: RecoverPasswordOwnerComponent},
  {path : 'recover-password-worker', component: RecoverPasswordWorkerComponent},
  {path:'restore-password-owner', component: RecoverPasswordOwnerComponent},
  {path :"register-owner", component: RegisterOwnerComponent},
  {path:"register-worker", component: RegisterOwnerComponent},
  {path:"recover-password-worker", component: RecoverPasswordWorkerComponent},
  {path:"recover-password-owner", component: RecoverPasswordOwnerComponent},
  {path:"validation", component: ValidationComponent},
  { path: '', redirectTo: 'login-owner', pathMatch: 'full' },
  { path: '**', loadComponent: PageNotFoundComponent }
];
