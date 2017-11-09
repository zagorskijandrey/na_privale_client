import {Component, OnInit} from '@angular/core';
import {Hamlet} from '../../../shared/models/hamlet';
import {LocationService} from '../../../shared/services/location.service';
import {Router} from '@angular/router';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';

@Component({
  selector: 'app-fishing-map',
  templateUrl: './fishing-map.component.html',
  styleUrls: ['./fishing-map.component.css']
})
export class FishingMapComponent implements OnInit {

  hamlets: Hamlet[];

  style: any;
  radius = 5000;
  strokeColor = '#ffc7c5';
  strokeOpacity = 0.8;
  strokeWeight = 2;
  fillColor = '#4040440';
  fillOpacity = 0.3;
  lat = 49;
  lng = 31;
  zoom = 7;

  // @ViewChild('circle')
  // public searchCircle: AgmCircle;

  constructor(/*private mapsAPILoader: MapsAPILoader,*/
              private router: Router, private locationService: LocationService, private errorService: ErrorHandlerService) {
  }

  ngOnInit() {
    this.locationService.getHamletByUsername().subscribe(res => {
      this.hamlets = res;
    }, (error) => {
      this.openDialog(error);
      this.router.url.match('/signin');
    });
  }

  private openDialog(error) {
    this.errorService
      .confirm('Ошибка:', error)
      .subscribe(res => res);
  }

  clickedCircle(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  // private setCurrentPosition() {
  //   if ('geolocation' in navigator) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       // this.latitude = position.coords.latitude;
  //       // this.longitude = position.coords.longitude;
  //       this.zoom = 12;
  //     });
  //   }
  // }
}
