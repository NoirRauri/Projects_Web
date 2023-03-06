import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodeRoutingModule } from './episode-routing.module';
import { EpisodeComponent } from './episode.component';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [EpisodeComponent],
  imports: [CommonModule, EpisodeRoutingModule, MaterialModule],
})
export class EpisodeModule {}
