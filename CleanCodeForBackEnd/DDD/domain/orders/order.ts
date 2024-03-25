export class Order {
  public createdAt: Date;
  public total: number;
  public costumerDocument: string;

  constructor(total: number, costumerDocument: string) {
    this.costumerDocument = costumerDocument;
    this.createdAt = new Date();
    this.total = total;
  }
}
