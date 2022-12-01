import { Observable } from 'rxjs';
import { Order } from './order.interface';

export interface OrderService {
  retrieveOrders: () => Observable<Order[]>;
  calculateShipping: (km: number) => number;
}
