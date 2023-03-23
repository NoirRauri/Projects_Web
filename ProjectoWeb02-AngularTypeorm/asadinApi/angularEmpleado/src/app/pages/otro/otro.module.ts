import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtroRoutingModule } from './otro-routing.module';
import { OtroComponent } from './otro.component';


@NgModule({
  declarations: [
    OtroComponent
  ],
  imports: [
    CommonModule,
    OtroRoutingModule
  ]
})
export class OtroModule { }
