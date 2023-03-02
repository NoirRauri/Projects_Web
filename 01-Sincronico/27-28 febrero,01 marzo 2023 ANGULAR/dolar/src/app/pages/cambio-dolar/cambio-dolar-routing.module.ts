import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioDolarComponent } from './cambio-dolar.component';

const routes: Routes = [{ path: '', component: CambioDolarComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CambioDolarRoutingModule { }
