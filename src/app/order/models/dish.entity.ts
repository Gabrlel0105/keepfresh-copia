export class Dish {
  id?: number;
  name?: string;
  price?: number;

  constructor(data: Partial<Dish>) {
    Object.assign(this, data);
  }
}

export class DishItem {
  name?: string;
  quantity?: number;
  price?: number;

  constructor(data: Partial<DishItem>) {
    Object.assign(this, data);
  }
}
