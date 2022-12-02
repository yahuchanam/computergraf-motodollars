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
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./presentation/admin/admin.component').then(
        (m) => m.AdminComponent
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
