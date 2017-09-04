/**
 * Created by AZagorskyi on 01.09.2017.
 */
import {Component, OnInit} from '@angular/core';
import {Fish} from '../../../shared/models/fish';
import {NumberPickerService} from '../../../shared/services/number-picker.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  fishes: Fish[];
  amountFishes: Number = 0;
  fishes_name: any[] = [{value: 'carp', viewValue: 'карп'},
    {value: 'bus', viewValue: 'судак'},
    {value: 'hunter', viewValue: 'щука'}];

  constructor(private numberPickerService: NumberPickerService) {
  }

  ngOnInit() {
  }

  enterNum(id: number, parameter: string) {
    this.numberPickerService.enterNum().subscribe(res => {
      this.fishes[id][parameter] = res;
    });
  }
}
