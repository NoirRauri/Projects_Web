import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { CreateClientesComponent } from './create-clientes/create-clientes.component';


@NgModule({
  declarations: [
    ClientesComponent,
    CreateClientesComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule
  ]
})
export class ClientesModule { }
