import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-checkout-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkout-item.component.html',
  styleUrls: ['./checkout-item.component.scss']
})
export class CheckoutItemComponent {
  @Input() title = '';
  @Input() value: string | null = null;
}
