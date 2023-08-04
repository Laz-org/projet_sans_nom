import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarnetPage } from './carnet.page';

const routes: Routes = [
  {
    path: '',
    component: CarnetPage
  },
  {
    path:":carnetId",
    loadChildren:()=>import('./single-carnet/single-carnet.module').then(m=>m.SingleCarnetPageModule)
  },
  {
    path: 'single-carnet',
    loadChildren: () => import('./single-carnet/single-carnet.module').then( m => m.SingleCarnetPageModule)
  },
  {
    path: 'add-carnet',
    loadChildren: () => import('./add-carnet/add-carnet.module').then( m => m.AddCarnetPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarnetPageRoutingModule {}
