import {Component, OnInit} from '@angular/core';
import {Fish} from '../../../shared/models/fish';
/**
 * Created by AZagorskyi on 01.09.2017.
 */
@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./../fishing-page.component.css']
})
export class FishComponent implements OnInit {
  fishes: Fish[];
  fishes_name: any[] = [{value: 'carp', viewValue: 'карп'},
    {value: 'bus', viewValue: 'судак'},
    {value: 'hunter', viewValue: 'щука'}];

  constructor() {
  }

  ngOnInit() {
  }

  getFishesName(): any[] {
    const fishes_names = [{value: 'carp', viewValue: 'карп'},
      {value: 'bus', viewValue: 'судак'},
      {value: 'hunter', viewValue: 'щука'}];
    return fishes_names;
  }
}
