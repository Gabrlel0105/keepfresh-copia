import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Order} from '../models/order.entity';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

const orderResourceEndpointPath = environment.ordersEndpointPath;

@Injectable({
  providedIn: 'root'
})

export class OrderService extends BaseService<Order>{

  //const orderResourceEndpointPath = environment.ordersEndpointPath;

  constructor() {
    super();
    this.resourceEndpoint = orderResourceEndpointPath;
  }

  protected override   = '/orders';

  removeOrder(id: number): Observable<void> {
    return this.delete(id);
  }

  getOrders(): Observable<Order[]> {
    return this.getAll();
  }

}
