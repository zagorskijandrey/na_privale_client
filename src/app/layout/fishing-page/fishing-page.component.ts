import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fishing-page',
  templateUrl: './fishing-page.component.html',
  styleUrls: ['./fishing-page.component.css']
})
export class FishingPageComponent implements OnInit {

  selectedFish: string = null;
  fishes: any[] = [{value: 'carp', viewValue: 'карп'},
    {value: 'bus', viewValue: 'судак'},
    {value: 'hunter', viewValue: 'щука'}];
  constructor() {  }

  ngOnInit() {
    // this.fishes = [{value: 'carp', viewValue: 'карп'},
    //   {value: 'bus', viewValue: 'судак'},
    //   {value: 'hunter', viewValue: 'щука'}];
    // this.fishes.sort();
  }

}
