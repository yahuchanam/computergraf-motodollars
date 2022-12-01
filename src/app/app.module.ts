import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { MotoDollarsDatabaseConfig } from './infra/moto-dollars.database';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxIndexedDBModule.forRoot(MotoDollarsDatabaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
