import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { CreateClientesComponent } from './create-clientes/create-clientes.component';

const routes: Routes = [
  { path: '', component: ClientesComponent },
  { path: 'create', component: CreateClientesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientesRoutingModule {}
