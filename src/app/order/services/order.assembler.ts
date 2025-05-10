import {Order} from '../models/order.entity';
import {OrderResource} from './order.response';
import {DishItem} from '../models/dish.entity';

export class OrderAssembler {

  static toEntityFromResource(resource: OrderResource): Order {
  const order = new Order({
    id: resource.id,
    tableNumber: resource.tableNumber,
    total: resource.total,
    createdAt: resource.createdAt,
    items: resource.items.map(item => new DishItem({
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    }))
  });

  return order;
}

static toResourceFromEntity(entity: Order): OrderResource {
  return {
    id: entity.id!,
    tableNumber: entity.tableNumber!,
    createdAt: entity.createdAt!,
    total: entity.total!,
    items: entity.items?.map(item => ({
      name: item.name!,
      quantity: item.quantity!,
      price: item.price!,
    })) || []
  };
}

}
