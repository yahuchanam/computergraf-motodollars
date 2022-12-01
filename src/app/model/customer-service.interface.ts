import { Observable } from 'rxjs';
import { OrderPayload, Order } from './';

export interface CustomerService {
  addOrder: (order: OrderPayload) => Observable<Order>;
}
