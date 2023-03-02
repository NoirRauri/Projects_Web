import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RmmainComponent } from './rmmain.component';

const routes: Routes = [{ path: '', component: RmmainComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RmmainRoutingModule {}
