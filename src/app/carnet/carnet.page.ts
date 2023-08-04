import { Component, OnInit } from '@angular/core';
import { CarnetService } from './carnet.service';
import { Carnet } from './carnet.model';
import * as _ from 'underscore';

@Component({
  selector: 'app-carnet',
  templateUrl: './carnet.page.html',
  styleUrls: ['./carnet.page.scss'],
})
export class CarnetPage implements OnInit {

  carnet?: Carnet[];
  constructor(private carnetService: CarnetService,) { }

  ngOnInit() {
    //this.carnet = this.carnetService.getAllCarnet();
  }
  ionViewWillEnter(){
    this.carnet = this.carnetService.getAllCarnet();
    this.carnet = _.sortBy(this.carnet, 'id');
  }

  sort_by_date() {
    this.carnet = _.sortBy(this.carnet!, 'date');
  }

  sort_by_destination() {
    this.carnet = _.sortBy(this.carnet!, 'destination');
  }

  sort_by_default() {
    this.carnet = _.sortBy(this.carnet!, 'id');
  }

}
