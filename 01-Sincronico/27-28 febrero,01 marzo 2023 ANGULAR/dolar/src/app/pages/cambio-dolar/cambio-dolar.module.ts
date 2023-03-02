import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambioDolarRoutingModule } from './cambio-dolar-routing.module';
import { CambioDolarComponent } from './cambio-dolar.component';

import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [CambioDolarComponent],
  imports: [CommonModule, CambioDolarRoutingModule, MaterialModule],
})
export class CambioDolarModule {}
