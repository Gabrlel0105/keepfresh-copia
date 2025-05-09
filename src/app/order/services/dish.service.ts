import { Injectable } from '@angular/core';
import {Dish} from '../models/dish.entity';
import {environment} from '../../../environments/environment';
import {BaseService} from '../../shared/services/base.service';

@Injectable({
  providedIn: 'root'
})


export class DishService extends BaseService<Dish>{
  protected override resourceEndpoint = environment.dishesEndpointPath;
}
