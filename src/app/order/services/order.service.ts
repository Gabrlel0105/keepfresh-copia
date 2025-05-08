import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Order} from '../models/order.entity';
import {environment} from '../../../environments/environment';

const orderResourceEndpointPath = environment.ordersEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class OrderService extends BaseService<Order>{

  constructor() {
    super();
    this.resourceEndpoint = orderResourceEndpointPath;
  }


}
