import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Order} from '../models/order.entity';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class OrderService extends BaseService<Order>{

  protected override resourceEndpoint = environment.ordersEndpointPath;

}
