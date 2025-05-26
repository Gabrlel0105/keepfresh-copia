import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {OrderDish} from '../models/order-dish.entity';
import {environment} from '../../../environments/environment';

const orderDishesEndpointPath = environment.orderDishesEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class OrderDishService extends BaseService<OrderDish>{

  constructor() {
    super();
    this.resourceEndpoint = orderDishesEndpointPath;
  }


}
