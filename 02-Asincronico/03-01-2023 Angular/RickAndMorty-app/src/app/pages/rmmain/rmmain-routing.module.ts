import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePersonajesComponent } from './detalle-personajes/detalle-personajes.component';
import { ListaCardComponent } from './lista-card/lista-card.component';
import { RmmainComponent } from './rmmain.component';

const routes: Routes = [
  { path: '', component: RmmainComponent },
  { path: 'detalle', component: DetallePersonajesComponent },
  { path: 'detalle/:id', component: DetallePersonajesComponent },
  { path: 'listaCart', component: ListaCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmmainRoutingModule { }
