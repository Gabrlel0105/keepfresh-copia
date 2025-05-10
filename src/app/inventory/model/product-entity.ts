export class Product {
  id: number;
  name: string;
  expirationDate: string;
  quantity: number;

  constructor(id: number, name: string, expirationDate: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.expirationDate = expirationDate;
    this.quantity = quantity;
  }
}
