import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderPayload } from 'src/app/model';
import { CheckoutItemComponent } from '../checkout-item/checkout-item.component';

@Component({
  selector: 'app-order-done',
  standalone: true,
  imports: [CommonModule, CheckoutItemComponent],
  templateUrl: './order-done.component.html',
  styleUrls: ['./order-done.component.scss']
})
export class OrderDoneComponent {
  @Input() order!: OrderPayload;
  @Input() brlValue = 0;
  @Output() back = new EventEmitter();

  backHandle(): void {
    this.back.emit();
  }
}
