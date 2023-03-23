import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpleadosRoutingModule } from './empleados-routing.module';
import { EmpleadosComponent } from './empleados.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [EmpleadosComponent],
  imports: [CommonModule, EmpleadosRoutingModule, MaterialModule]
})
export class EmpleadosModule { }
