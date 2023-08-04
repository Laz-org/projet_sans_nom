import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleCarnetPage } from './single-carnet.page';

const routes: Routes = [
  {
    path: '',
    component: SingleCarnetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleCarnetPageRoutingModule {}
