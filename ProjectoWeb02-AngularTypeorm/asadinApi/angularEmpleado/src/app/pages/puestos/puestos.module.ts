import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuestosRoutingModule } from './puestos-routing.module';
import { PuestosComponent } from './puestos.component';


@NgModule({
  declarations: [
    PuestosComponent
  ],
  imports: [
    CommonModule,
    PuestosRoutingModule
  ]
})
export class PuestosModule { }
