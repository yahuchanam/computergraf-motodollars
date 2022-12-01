import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exchange'
  },
  {
    path: 'exchange',
    loadComponent: () =>
      import('./presentation/exchange/exchange.component').then(
        (m) => m.ExchangeComponent
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
