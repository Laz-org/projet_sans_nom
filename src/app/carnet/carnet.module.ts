import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
import { IonicModule } from '@ionic/angular';

import { CarnetPageRoutingModule } from './carnet-routing.module';

import { CarnetPage } from './carnet.page';
import { CarnetItemComponent } from './carnet-item/carnet-item.component';
import { AddCarnetPage } from './add-carnet/add-carnet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarnetPageRoutingModule
  ],
  declarations: [
    CarnetPage,
    CarnetItemComponent,
    AddCarnetPage
  ]
})
export class CarnetPageModule {}
