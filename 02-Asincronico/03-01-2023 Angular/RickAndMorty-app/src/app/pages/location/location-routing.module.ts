import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './location.component';
import { DetalleLocationComponent } from './detalle-location/detalle-location.component'

const routes: Routes = [{ path: '', component: LocationComponent },
{ path: 'detalleLocation', component: DetalleLocationComponent },
{ path: 'detalleLocation/:id', component: DetalleLocationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationRoutingModule { }
