import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtroComponent } from './otro.component';

const routes: Routes = [{ path: '', component: OtroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtroRoutingModule { }
