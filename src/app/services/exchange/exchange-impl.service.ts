import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { APP_SETTINGS } from 'src/app/app.configuration';
import { ExchangeService } from 'src/app/model/exchange-service.interface';

const { DOLLAR_CALCULATE_API } = APP_SETTINGS;

@Injectable({
  providedIn: 'root'
})
export class ExchangeImplService implements ExchangeService {
  constructor(private http: HttpClient) {}

  retrieveDollarValue(date: Date): Observable<number> {
    const datePipe = new DatePipe('pt-br');
    const formatedDate = datePipe.transform(date, 'yyyyMMdd') as string;

    const htttParamsBuilder: HttpParams = new HttpParams();
    const params = htttParamsBuilder
      .append('start_date', formatedDate)
      .append('end_date', formatedDate);

    return this.http
      .get<any>(`${DOLLAR_CALCULATE_API}`, { params })
      .pipe(map((payload) => payload[0].high as number));
  }
}
