import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmmainRoutingModule } from './rmmain-routing.module';
import { RmmainComponent } from './rmmain.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [RmmainComponent],
  imports: [CommonModule, RmmainRoutingModule, MaterialModule],
})
export class RmmainModule {}
