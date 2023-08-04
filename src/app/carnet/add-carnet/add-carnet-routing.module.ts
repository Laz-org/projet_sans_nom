import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddCarnetPage } from './add-carnet.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarnetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddCarnetPageRoutingModule {}
