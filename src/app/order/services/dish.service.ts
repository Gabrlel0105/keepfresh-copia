import { Injectable } from '@angular/core';
import {BaseService} from '../../shared/services/base.service';
import {Dish} from '../models/dish.entity';
import {environment} from '../../../environments/environment';

const dishesResourceEndpointPath = environment.dishesEndpointPathsEndpointPath;
@Injectable({
  providedIn: 'root'
})


export class DishService extends BaseService<Dish>{

  constructor() {
    super();
    this.resourceEndpoint = dishesResourceEndpointPath;
  }
}
