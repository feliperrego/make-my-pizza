export interface PizzaOptions {
  flavor: string;
  dough: string;
  size: string;
}

export interface User {
  name: string;
  address: string;
}

export interface Order {
  totalValue: number;
  paymentType: string;
}

export interface OrderData {
  pizza: PizzaOptions,
  user: User,
  order: Order
}
