import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from 'src/app/shared-ui/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { LogoComponent } from 'src/app/shared-ui/logo/logo.component';
import { CtaComponent } from 'src/app/shared-ui/cta/cta.component';
import { ExchangeFormComponent } from 'src/app/shared-ui/exchange-form/exchange-form.component';

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
  templateUrl: './exchange.component.html',
  styleUrls: ['./exchange.component.scss']
})
export class ExchangeComponent {
  public step = 1;
}
