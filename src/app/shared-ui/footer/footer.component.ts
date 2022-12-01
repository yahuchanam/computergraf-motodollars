import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricComponent } from '../metric/metric.component';
import { Metric } from 'src/app/model/metric.interface';
import { TextLegalComponent } from '../text-legal/text-legal.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MetricComponent, TextLegalComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() showMetrics = true;
  @Input() metrics: Metric[] = [];
}
