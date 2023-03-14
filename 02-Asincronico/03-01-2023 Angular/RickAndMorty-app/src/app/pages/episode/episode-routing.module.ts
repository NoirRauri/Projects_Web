import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './episode.component';
import { DetalleEpisodeComponent } from './detalle-episode/detalle-episode.component'

const routes: Routes = [{ path: '', component: EpisodeComponent },
{ path: 'detalleEpisode', component: DetalleEpisodeComponent },
{ path: 'detalleEpisode/:id', component: DetalleEpisodeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EpisodeRoutingModule { }
