import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PresetValuesComponent } from '../preset-values/preset-values.component';
import { ExchangeForm } from 'src/app/model';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@Component({
  selector: 'app-exchange-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    CurrencyMaskModule,
    PresetValuesComponent
  ],
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExchangeFormComponent implements OnInit {
  @Input() public loading = true;
  @Input() set exchangeRate(value: number) {
    this._exchangeRate = value;
    this.exchangeformGroup.get('brl')?.setValue(1000);
  }

  @Output() public startOrder = new EventEmitter<ExchangeForm>();

  private _exchangeRate = 0;
  public exchangeformGroup: FormGroup = this.formBuilder.group({
    usd: [1, [Validators.required, Validators.min(0.01)]],
    brl: [1, [Validators.required, Validators.min(0.01)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.exchangeformGroup
      .get('usd')
      ?.valueChanges.subscribe((newUSD: number) => {
        this.calculateBRL(newUSD);
      });

    this.exchangeformGroup
      .get('brl')
      ?.valueChanges.subscribe((newBRL: number) => {
        this.calculateUSD(newBRL);
      });
  }

  startOrderHandle(): void {
    this.startOrder.emit(this.exchangeformGroup.value);
  }

  applyValue(newValue: number): void {
    this.exchangeformGroup.get('usd')?.setValue(newValue);
  }

  calculateBRL(newUSD: number): void {
    this.updateForm({
      brl: this._exchangeRate * newUSD,
      usd: newUSD
    });
  }

  calculateUSD(newBRL: number): void {
    this.updateForm({
      brl: newBRL,
      usd: newBRL / this._exchangeRate
    });
  }

  updateForm(exchangeData: ExchangeForm): void {
    this.exchangeformGroup.patchValue(
      {
        ...exchangeData
      },
      { emitEvent: false }
    );
    this.changeDetector.detectChanges();
  }
}
