import { Component } from '@angular/core';
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

@Component({
  selector: 'app-exchange-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatInputModule
  ],
  templateUrl: './exchange-form.component.html',
  styleUrls: ['./exchange-form.component.scss']
})
export class ExchangeFormComponent {
  public exchangeformGroup: FormGroup = this.formBuilder.group({
    usd: [1, [Validators.required]],
    brl: [null, [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder) {}
}
