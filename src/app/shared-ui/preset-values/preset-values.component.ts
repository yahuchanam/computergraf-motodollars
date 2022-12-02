import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-preset-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preset-values.component.html',
  styleUrls: ['./preset-values.component.scss']
})
export class PresetValuesComponent {
  @Output() changeValue = new EventEmitter<number>();

  public presetValues: number[] = [100, 250, 500, 1000];
}
