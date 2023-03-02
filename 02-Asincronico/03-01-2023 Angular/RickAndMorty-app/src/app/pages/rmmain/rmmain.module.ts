import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmmainRoutingModule } from './rmmain-routing.module';
import { RmmainComponent } from './rmmain.component';


@NgModule({
  declarations: [
    RmmainComponent
  ],
  imports: [
    CommonModule,
    RmmainRoutingModule
  ]
})
export class RmmainModule { }
