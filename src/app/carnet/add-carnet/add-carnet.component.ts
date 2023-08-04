import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CarnetService } from '../carnet.service'
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Carnet } from '../carnet.model';

/* @Component({
  selector: 'app-add-carnet',
  templateUrl: 'add-carnet-modal.component.html',
}) */

export class AddCarnetComponent {
   
  carnet:Carnet ={
      name: '',
      id: '',
      destination: '',
      date: '',
      description: '',
      imageUrl: ''
  }
  constructor(private modalCtrl: ModalController,private carnetService: CarnetService) {}
  

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    this.carnetService.insertCarnet(this.carnet);
      console.log('Nouveau carnet:',this.carnet);
    
    return this.modalCtrl.dismiss(this.carnet.name, 'confirm');
  }
}