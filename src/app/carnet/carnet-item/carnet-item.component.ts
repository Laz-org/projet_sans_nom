import { Component, Input, OnInit } from '@angular/core';
import { Carnet } from '../carnet.model';

@Component({
  selector: 'app-carnet-item',
  templateUrl: './carnet-item.component.html',
  styleUrls: ['./carnet-item.component.scss'],
})
export class CarnetItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  @Input() item: Carnet|null = null;
}
