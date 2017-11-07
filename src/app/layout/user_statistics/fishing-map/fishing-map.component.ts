import {Component, OnInit} from '@angular/core';
import {Hamlet} from '../../../shared/models/hamlet';
import {LocationService} from '../../../shared/services/location.service';

@Component({
  selector: 'app-fishing-map',
  templateUrl: './fishing-map.component.html',
  styleUrls: ['./fishing-map.component.css']
})
export class FishingMapComponent implements OnInit {

  hamletList: Hamlet[];

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    this.locationService.getHamletByUsername().subscribe(res => {
      this.hamletList = res;
    });
  }

}
