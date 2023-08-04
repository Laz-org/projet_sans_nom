import { Component, Input, OnInit } from '@angular/core';
import { Carnet, Commentaire } from '../carnet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CarnetService } from '../carnet.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-single-carnet',
  templateUrl: './single-carnet.page.html',
  styleUrls: ['./single-carnet.page.scss'],
})
export class SingleCarnetPage implements OnInit {

  loadedCarnet?:Carnet;
  loadedCom?:Commentaire[];
  commentStatus:boolean=false;

  elComment:Commentaire={
    id:"Yes",
    name:"",
    message:"",
    idCarnet:this.loadedCarnet?.id
  };

  constructor(
    private activatedRoute:ActivatedRoute,
    private carnetService: CarnetService,
    private router: Router,
    private alertCrt:AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      if (!paramMap.has('carnetId'))return;
      const carnetId = paramMap.get('carnetId');
      this.loadedCarnet=this.carnetService.getCarnet(carnetId!);
    })
    // this.activatedRoute.paramMap.subscribe(paramMap=>{
    //   if (!paramMap.has('carnetId'))return;
    //   const carnetId = paramMap.get('carnetId');
    //   this.loadedCom=this.carnetService.getCommentaire(carnetId!);
    // })
  }

  onDeleteCarnet(){
    this.alertCrt.create({
      header:'Are you sure about that ?',
      message:'Veux tu vraiment supprimer le carnet ?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
    {
      text:'Supprimer',
      handler:()=>{
        this.carnetService.deleteCarnet(this.loadedCarnet?.id!);
        this.router.navigate(['/carnet']);
      }
    }]
    }).then(alertEl=>{
      alertEl.present();
    })
  }
  statusCommentaire(){
    this.commentStatus = !this.commentStatus;
  }
  addCommentaire(){
    
  }



}
