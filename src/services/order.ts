import api from '@services/api';
import { AxiosPromise } from 'axios';

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
  pizza?: PizzaOptions,
  user?: User,
  order?: Order
}

export const getPrice = (pizzaValues?: PizzaOptions): AxiosPromise<{ value: number }> => api.post('price', pizzaValues);

export const sendOrder = (order: OrderData): AxiosPromise<OrderData> => api.post('order', order);
