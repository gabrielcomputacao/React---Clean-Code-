import { Order } from "../domain/orders/order";

export interface OrdersRepository {
  create(order: Order): Promise<void>;
}
