import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  Address,
  AddressService,
  ExchangeForm,
  OrderPayload,
  OrderService
} from 'src/app/model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskModule } from 'ngx-mask';
import { CheckoutItemComponent } from '../checkout-item/checkout-item.component';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { AddressImplService } from 'src/app/services/address/address-impl.service';
import { OrderImplService } from 'src/app/services/order/order-impl.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-address-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    NgxMaskModule,
    CheckoutItemComponent
  ],
  providers: [
    {
      provide: AddressService,
      useExisting: AddressImplService
    },
    {
      provide: OrderService,
      useExisting: OrderImplService
    }
  ],
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit, OnDestroy {
  @Input() exchangeSelected: ExchangeForm = {
    usd: 0,
    brl: 0
  };

  @Output() back = new EventEmitter<ExchangeForm>();
  @Output() closeDeal = new EventEmitter<OrderPayload>();

  public addressformGroup: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    addressNumber: ['', [Validators.required, Validators.minLength(1)]],
    postalCode: ['', [Validators.required, Validators.minLength(8)]],
    extra: ['', []],
    city: ['', [Validators.required, Validators.minLength(3)]],
    district: ['', [Validators.required, Validators.minLength(2)]],
    state: [
      '',
      [Validators.required, Validators.minLength(2), Validators.maxLength(2)]
    ],
    kmDistance: [null, [Validators.required]]
  });

  public shippingValue = 0;
  public orderTotal = 0;
  public subs = new SubSink();

  constructor(
    private formBuilder: FormBuilder,
    private addressService: AddressService,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    this.subs.sink = this.addressformGroup
      .get('postalCode')
      ?.valueChanges.pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((postalCode: string) => {
        if (postalCode.length < 8) return;
        this.loadAddress(postalCode);
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  loadAddress(postalCode: string): void {
    this.subs.sink = this.addressService
      .retrieveByPostalCode(postalCode)
      .subscribe((addressPaylod) => {
        this.addressformGroup.patchValue({
          ...addressPaylod
        });
        this.loadDistance(addressPaylod);
      });
  }

  loadDistance(address: Address): void {
    this.subs.sink = this.addressService
      .retrieveDistanceForDelivery(address)
      .subscribe((kmDistance) => {
        this.addressformGroup.patchValue({
          ...{ kmDistance }
        });
        this.calculateTotal(kmDistance);
      });
  }

  calculateTotal(kmDistance: number): void {
    this.shippingValue = this.orderService.calculateShipping(kmDistance);
    this.orderTotal = this.shippingValue + this.exchangeSelected.brl;
  }

  order(): void {
    if (this.addressformGroup.invalid) return;
    this.closeDeal.emit({
      ...this.addressformGroup.value,
      usd: this.exchangeSelected.usd
    });
  }

  backHandle(): void {
    this.back.emit(this.exchangeSelected);
  }
}
