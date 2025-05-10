// @ts-ignore

export interface OrderResponse {
  results: OrderResource[];

}

export interface OrderResource{

  id: number;
  tableNumber: number;
  items: {
    name: string;
    quantity: number;
    price: number;
  }[];
  total: number;
  createdAt: string;

}
