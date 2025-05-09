import {DishItem} from './dish.entity';

export class Order {
  id?: number;
  tableNumber?: number;
  items?: DishItem[];
  total?: number;
  createdAt?: string;

  constructor(data: Partial<Order>) {
    Object.assign(this, data);
  }
}
