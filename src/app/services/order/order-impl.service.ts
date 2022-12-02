import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { Order, OrderPayload, OrderService } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class OrderImplService implements OrderService {
  constructor(private databaseService: NgxIndexedDBService) {}

  retrieveOrders(): Observable<OrderPayload[]> {
    return this.databaseService.getAll<OrderPayload>('Orders');
  }

  calculateShipping(km: number): number {
    return km;
  }
}
