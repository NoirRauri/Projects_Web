import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const myListMaterialModule = [
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
];

@NgModule({
  imports: [...myListMaterialModule],
  exports: [...myListMaterialModule],
})
export class MaterialModule {}
