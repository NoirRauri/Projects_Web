import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'RMmain',
    loadChildren: () =>
      import('./pages/rmmain/rmmain.module').then((m) => m.RmmainModule),
  },
  {
    path: 'Location',
    loadChildren: () =>
      import('./pages/location/location.module').then((m) => m.LocationModule),
  },
  { path: 'Episode', loadChildren: () => import('./pages/episode/episode.module').then(m => m.EpisodeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
