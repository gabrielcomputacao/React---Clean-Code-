import { Order } from "../domain/orders/order";

interface SubmitOrderRequest {
  costumerDocument: string;
  total: number;
}

interface SubmitOrderResponse {}

export class SubmitOrder {
  async execute({ costumerDocument, total }: SubmitOrderRequest) {
    const order = new Order(total, costumerDocument);

    // Persistir no banco de dados
  }
}
