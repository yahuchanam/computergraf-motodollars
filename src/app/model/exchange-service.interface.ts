import { Observable } from 'rxjs';

export abstract class ExchangeService {
  public abstract retrieveDollarValue(date: Date): Observable<number>;
}
