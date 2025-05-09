import {Dish} from './dish.entity';

export interface OrderItem {
  dish: Dish;
  quantity: number;
}

export interface Order {
  id: number;
  tableNumber: number;
  items: OrderItem[];
  total: number;
  createdAt: Date;
}
