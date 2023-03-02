import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

const myListMaterialModule = [MatButtonModule, MatCardModule, MatMenuModule];

@NgModule({
  imports: [...myListMaterialModule],
  exports: [...myListMaterialModule],
})
export class MaterialModule {}
