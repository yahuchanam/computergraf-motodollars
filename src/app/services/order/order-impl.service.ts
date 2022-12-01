import { Injectable } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { Observable } from 'rxjs';
import { Order, OrderService } from 'src/app/model';

@Injectable({
  providedIn: 'root'
})
export class OrderImplService implements OrderService {
  constructor(private databaseService: NgxIndexedDBService) {}

  retriveOrders(): Observable<Order[]> {
    return this.databaseService.getAll<Order>('orders');
  }
}
