import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { MaterialModule } from 'src/app/material.module';
import { DetalleEpisodeComponent } from './detalle-episode/detalle-episode.component';

@NgModule({
  declarations: [EpisodeComponent, DetalleEpisodeComponent],
  imports: [CommonModule, EpisodeRoutingModule, MaterialModule],
})
export class EpisodeModule {}
