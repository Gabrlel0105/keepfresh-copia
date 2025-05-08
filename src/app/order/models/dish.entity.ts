export class Dish {
  id: number;
  name: string;
  quantity: number;

  constructor(dish: {id?: number, name?: string, quantity?: number}) {
    this.id = dish.id || 0;
    this.name = dish.name || '';
    this.quantity = dish.quantity || 0;
  }

}
