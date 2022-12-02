import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared-ui/footer/footer.component';
import { AdminHeaderComponent } from 'src/app/shared-ui/admin-header/admin-header.component';
import { MatTableModule } from '@angular/material/table';
import { OrderPayload, OrderService } from 'src/app/model';
import { OrderImplService } from 'src/app/services/order/order-impl.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    FooterComponent,
    AdminHeaderComponent
  ],
  providers: [
    {
      provide: OrderService,
      useExisting: OrderImplService
    }
  ],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public orderColumns: string[] = ['name', 'postalCode', 'usd', 'kmDistance'];
  public orderDataSource$: Observable<OrderPayload[]> = this.orderService
    .retrieveOrders()
    .pipe(
      map((orders) =>
        orders.map((order) => {
          order.kmDistance = Math.round(order.kmDistance);
          return order;
        })
      )
    );

  constructor(private orderService: OrderService) {}
}
