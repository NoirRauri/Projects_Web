import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'cambioDolar',
    loadChildren: () =>
      import('./pages/cambio-dolar/cambio-dolar.module').then(
        (m) => m.CambioDolarModule
      ),
  },
  {
    path: 'clientes',
    loadChildren: () =>
      import('./pages/clientes/clientes.module').then((m) => m.ClientesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
