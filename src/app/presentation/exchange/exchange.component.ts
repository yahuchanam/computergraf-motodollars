import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared-ui/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LogoComponent } from 'src/app/shared-ui/logo/logo.component';
import { CtaComponent } from 'src/app/shared-ui/cta/cta.component';
import { ExchangeFormComponent } from 'src/app/shared-ui/exchange-form/exchange-form.component';
import { ExchangeService } from 'src/app/model';
import { ExchangeImplService } from 'src/app/services/exchange/exchange-impl.service';
import { SubSink } from 'subsink';
import { Metric } from 'src/app/model/metric.interface';

@Component({
  selector: 'app-exchange',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    FooterComponent,
    LogoComponent,
    CtaComponent,
    ExchangeFormComponent
  ],
  providers: [
    {
      provide: ExchangeService,
      useExisting: ExchangeImplService
    }
  ],
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent implements OnInit, OnDestroy {
  private subs = new SubSink();
  public step = 1;
  public exchangeRate = 0;
  public metrics: Metric[] = [
    {
      value: '-60',
      description: 'Entraga em minutos'
    },
    {
      value: '+500',
      description: 'Entregadores'
    },
    {
      value: '1',
      description: 'Apenas R$ 1 por KM'
    }
  ];

  constructor(private exchangeService: ExchangeService) {}

  ngOnInit(): void {
    const yesterday = this.getYesterday();
    this.subs.sink = this.exchangeService
      .retrieveDollarValue(yesterday)
      .subscribe((exchangeRate: number) => {
        this.exchangeRate = exchangeRate;
      });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  getYesterday(): Date {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
  }
}
