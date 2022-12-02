import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared-ui/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LogoComponent } from 'src/app/shared-ui/logo/logo.component';
import { CtaComponent } from 'src/app/shared-ui/cta/cta.component';
import { ExchangeFormComponent } from 'src/app/shared-ui/exchange-form/exchange-form.component';
import { ExchangeForm, ExchangeService, OrderPayload } from 'src/app/model';
import { ExchangeImplService } from 'src/app/services/exchange/exchange-impl.service';
import { SubSink } from 'subsink';
import { Metric } from 'src/app/model/metric.interface';
import { AddressFormComponent } from 'src/app/shared-ui/address-form/address-form.component';

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
    ExchangeFormComponent,
    AddressFormComponent
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
  public exchangeRate = {
    value: 0,
    selected: {
      usd: 0,
      brl: 1000
    }
  };

  public exchangeSelected: ExchangeForm = {
    usd: 0,
    brl: 1000
  };

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
        this.exchangeRate = {
          value: exchangeRate,
          selected: this.exchangeSelected
        };
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

  startOrder(exchangeData: ExchangeForm): void {
    this.exchangeSelected = exchangeData;
    this.step = 2;
  }

  gotoStepOne(exchangeData: ExchangeForm): void {
    this.step = 1;
    this.exchangeRate.selected = exchangeData;
  }

  closeDeal(data: OrderPayload): void {
    console.log(data);
  }
}
