import {Component, OnInit} from '@angular/core';
import {Region} from '../../../shared/models/region';
import {RegionService} from '../../../shared/services/region.service';

@Component({
  selector: 'app-map-prediction',
  templateUrl: './map-prediction.component.html',
  styleUrls: ['./map-prediction.component.css']
})
export class MapPredictionComponent implements OnInit {
  zoom = 7;
  lng = 31;
  lat = 49;
  regions: Region[];
  constructor(private regionService: RegionService) {
  }
  ngOnInit() {
    this.regionService.getRegions().subscribe(regions => this.regions = regions);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }
}
