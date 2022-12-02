import { Observable } from 'rxjs';
import { OrderPayload } from './';

export abstract class CustomerService {
  abstract addOrder: (order: OrderPayload) => Observable<OrderPayload>;
}
