import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-metric',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent {
  @Input() value = '';
  @Input() description = '';
}
