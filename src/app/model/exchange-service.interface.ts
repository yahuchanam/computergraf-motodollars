import { Observable } from 'rxjs';

export interface ExchangeService {
  retrieveDollarValue: (date: Date) => Observable<number>;
}
