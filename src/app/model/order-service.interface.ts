import { Observable } from 'rxjs';
import { OrderPayload } from './order-payload.interface';

export abstract class OrderService {
  abstract retrieveOrders: () => Observable<OrderPayload[]>;
  abstract calculateShipping: (km: number) => number;
}
