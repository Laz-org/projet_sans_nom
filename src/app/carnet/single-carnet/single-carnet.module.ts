import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleCarnetPageRoutingModule } from './single-carnet-routing.module';

import { SingleCarnetPage } from './single-carnet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleCarnetPageRoutingModule
  ],
  declarations: [SingleCarnetPage]
})
export class SingleCarnetPageModule {}
