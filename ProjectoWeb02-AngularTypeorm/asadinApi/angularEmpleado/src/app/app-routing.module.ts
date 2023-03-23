import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Empleados', loadChildren: () => import('./pages/empleados/empleados.module').then(m => m.EmpleadosModule) },
  { path: 'Personas', loadChildren: () => import('./pages/personas/personas.module').then(m => m.PersonasModule) },
  { path: 'Puesto', loadChildren: () => import('./pages/puestos/puestos.module').then(m => m.PuestosModule) },
  { path: 'Otro', loadChildren: () => import('./pages/otro/otro.module').then(m => m.OtroModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
