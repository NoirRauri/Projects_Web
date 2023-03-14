import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationRoutingModule } from './location-routing.module';
import { LocationComponent } from './location.component';
import { MaterialModule } from 'src/app/material.module';
import { DetalleLocationComponent } from './detalle-location/detalle-location.component';

@NgModule({
  declarations: [LocationComponent, DetalleLocationComponent],
  imports: [CommonModule, LocationRoutingModule, MaterialModule],
})
export class LocationModule {}
