import {Component, OnInit} from '@angular/core';
import {Region} from '../../../shared/models/region';
import {RegionService} from '../../../shared/services/region.service';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-map-prediction',
  templateUrl: './map-prediction.component.html',
  styleUrls: ['./map-prediction.component.css']
})
export class MapPredictionComponent implements OnInit {
  zoom = 7;
  lng = 31;
  lat = 49;
  marker = '../../../../assets/images/markers/';
  regions: Region[];
  constructor(public router: Router, private regionService: RegionService, private errorService: ErrorHandlerService) {
  }
  ngOnInit() {
    this.regionService.getRegions().subscribe((regions) => {
      this.regions = regions;
    } , (error) => {
      this.openDialog(error);
      this.router.url.match('/signin');
    });
  }

  private openDialog(error) {
    this.errorService
      .confirm('Ошибка:', error)
      .subscribe(res => res);
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }
}
