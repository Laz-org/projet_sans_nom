import { Component, OnInit,ViewChild  } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { CarnetService } from '../carnet.service'
import { Carnet } from '../carnet.model';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AddCarnetComponent } from './add-carnet.component';

@Component({
  selector: 'app-add-carnet',
  templateUrl: './add-carnet.page.html',
  styleUrls: ['./add-carnet.page.scss'],
})
export class AddCarnetPage implements OnInit {

    message = 'Formulaire d’ajout de Carnet de Voyage ';
  
    carnet:Carnet ={
        name: '',
        id: '',
        destination: '',
        date: '',
        description: '',
        imageUrl: ''
    }
  
    
    
    constructor(private router:Router, private carnetService:CarnetService, private modalCtrl: ModalController) { }
    
    async openModal() {
      const modal = await this.modalCtrl.create({
        component: AddCarnetComponent,
      });
      modal.present();
  
      const { data, role } = await modal.onWillDismiss();
  
      if (role === 'confirm') {
        this.message = `Normalement ca resort les trucs dans le form , ${data}!`;
      }
    }

    cancel() {
      return this.modalCtrl.dismiss(null, 'cancel');
    }
  
    confirm() {
      this.carnetService.insertCarnet(this.carnet);
        console.log('Nouveau carnet:',this.carnet);
      
      return this.modalCtrl.dismiss(this.carnet.name, 'confirm');
    }
  
    ngOnInit() {}
  
  }
  