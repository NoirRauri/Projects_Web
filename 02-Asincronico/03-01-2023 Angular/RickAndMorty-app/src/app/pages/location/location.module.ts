import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [LocationComponent],
  imports: [CommonModule, LocationRoutingModule, MaterialModule],
})
export class LocationModule {}
