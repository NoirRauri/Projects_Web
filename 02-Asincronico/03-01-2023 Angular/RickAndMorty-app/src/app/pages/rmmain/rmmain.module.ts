import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RmmainRoutingModule } from './rmmain-routing.module';
import { RmmainComponent } from './rmmain.component';
import { MaterialModule } from 'src/app/material.module';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { ListaCardComponent } from './lista-card/lista-card.component';

@NgModule({
  declarations: [RmmainComponent, DetallePersonajesComponent, ListaCardComponent],
  imports: [CommonModule, RmmainRoutingModule, MaterialModule],
})
export class RmmainModule { }
