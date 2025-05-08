import {Dish} from './dish.entity';

export class Order {
  id: number;
  tableNumber: number;
  dishes: Dish[];

  constructor(order: {id?: number, tableNumber?: number, dishes?: Dish[]}) {
    this.id= order.id || 0;
    this.tableNumber = order.tableNumber ||0;
    this.dishes = (order.dishes || []).map(dish => new Dish(dish));
  }

}
