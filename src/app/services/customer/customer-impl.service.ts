import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Order, CustomerService, OrderPayload } from 'src/app/model';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class CustomerImplService implements CustomerService {
  constructor(private databaseService: NgxIndexedDBService) {}

  addOrder(order: OrderPayload): Observable<Order> {
    return this.databaseService.add('orders', order).pipe(
      map((orderPayload) => ({
        id: orderPayload.id,
        usd: orderPayload.usd,
        createAt: orderPayload.createAt
      }))
    );
  }
}
