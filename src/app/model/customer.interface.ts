import { Address } from './address.interface';
import { Order } from './order.interface';

export interface Customer {
  id: number;
  name: string;
  address: Address;
  orders: Order[];
}
