/**
 * Created by AZagorskyi on 01.09.2017.
 */
import {Component, OnInit} from '@angular/core';
import {Fish} from '../../../../shared/models/fish';
import {NumberPickerService} from '../../../../shared/services/number-picker.service';

@Component({
  selector: 'app-fish',
  templateUrl: './fish.component.html',
  styleUrls: ['./fish.component.css']
})
export class FishComponent implements OnInit {
  fishes: Fish[];
  amountFishes: Number = 0;
  fishes_name: string[] = ['карп', 'амур', 'толстолоб', 'лещь', 'судак', 'щука', 'жерех', 'линь', 'карась', 'сом'];

  constructor(private numberPickerService: NumberPickerService) {
  }

  ngOnInit() {
  }

  enterNum(id: number, parameter: string) {
    const param = parameter;
    this.numberPickerService.enterNum(param).subscribe(res => {
      this.fishes[id][param] = res;
    });
  }
}
