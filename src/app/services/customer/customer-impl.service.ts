import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerService, OrderPayload } from 'src/app/model';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class CustomerImplService implements CustomerService {
  constructor(private databaseService: NgxIndexedDBService) {}

  addOrder(order: OrderPayload): Observable<OrderPayload> {
    return this.databaseService.add('Orders', order);
  }
}
