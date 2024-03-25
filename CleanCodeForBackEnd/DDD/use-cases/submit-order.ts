import { Order } from "../domain/orders/order";
import { OrdersRepository } from "../repositories/orders-repository";

interface SubmitOrderRequest {
  costumerDocument: string;
  total: number;
}

interface SubmitOrderResponse {}

export class SubmitOrder {
  /* sintaxe do typescript ja cria um variavel a partir do parametro recebido no construtor */
  constructor(private OrdersRepository: OrdersRepository) {}
  //   todo => é um dos principios do SOLID passar a dependencia no construtor e nao importar diretamente na classe, para ter inversão de dependencia

  async execute({ costumerDocument, total }: SubmitOrderRequest) {
    const order = new Order(total, costumerDocument);

    // Persistir no banco de dados
  }
}
