import { Observable } from 'rxjs';
import { Order } from './order.interface';

export interface OrderService {
  retriveOrders: () => Observable<Order[]>;
}
