import {Component, OnInit} from '@angular/core';
import {Fish} from '../../../shared/models/fish';
import {NumberPickerService} from "../../../shared/services/number-picker.service";
/**
 * Created by AZagorskyi on 01.09.2017.
 */
@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  fishes: Fish[];
  amountFishes: number = 0;
  fishes_name: any[] = [{value: 'carp', viewValue: 'карп'},
    {value: 'bus', viewValue: 'судак'},
    {value: 'hunter', viewValue: 'щука'}];

  constructor(private numberPickerService: NumberPickerService) {
  }

  ngOnInit() {
  }

  enterNum(id: number, parameter: string){
    this.numberPickerService.enterNum().subscribe(res => {
      this.fishes[id][parameter] = res;
      // if (parameter == 'weight'){
      //   this.amountFishes[id].weight = res;
      // } else {
      //   if (parameter == 'length') {
      //     this.amountFishes[id].length = res;
      //   }
      // }
    });
  }
}
