import { Observable } from 'rxjs';
import { Order } from './order.interface';

export abstract class OrderService {
  abstract retrieveOrders: () => Observable<Order[]>;
  abstract calculateShipping: (km: number) => number;
}
