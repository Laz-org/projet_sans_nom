import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AddCarnetPageRoutingModule } from './add-carnet-routing.module';
import {AddCarnetComponent } from './add-carnet.component'
import { AddCarnetModalComponent } from './add-carnet-modal/add-carnet-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddCarnetPageRoutingModule,
    
  ],
  declarations: [
    /* AddCarnetComponent, */
    AddCarnetModalComponent,
   
  ]
})
export class AddCarnetPageModule {}
