import {Component, OnInit, ViewChild} from '@angular/core';
import {Hamlet} from '../../../shared/models/hamlet';
import {LocationService} from '../../../shared/services/location.service';
import {Router} from '@angular/router';
import {ErrorHandlerService} from '../../../shared/services/error-handler.service';
import {MdSidenav} from '@angular/material';
import {FishingPageService} from '../../../shared/services/fishing-page.service';

@Component({
  selector: 'app-fishing-map',
  templateUrl: './fishing-map.component.html',
  styleUrls: ['./fishing-map.component.css']
})
export class FishingMapComponent implements OnInit {

  hamletName: string;
  hamlets: Hamlet[];
  isClosedSidenavRight = false;
  hamletsDescription: Array<{ date: any, comment: string }>;
  minAmountFishing: number;
  maxAmountFishing: number;

  style: any;
  strokeColor = '#000000';
  strokeOpacity = 0.8;
  fillColor = '#4040440';
  fillOpacity = 0.3;
  lat = 49;
  lng = 31;
  zoom = 7;

  @ViewChild('sidenavRight') sidenavRight: MdSidenav;
  constructor(private fishingPageService: FishingPageService, private router: Router,
              private locationService: LocationService, private errorService: ErrorHandlerService) {
  }

  ngOnInit() {
    this.locationService.getHamletByUsername().subscribe(res => {
      this.hamlets = res;
       const hamletMaxAmount = this.hamlets.reduce(function (prev, curr) {
        return prev.amount > curr.amount ? prev : curr;
      });
       this.maxAmountFishing = hamletMaxAmount.amount;
      const hamletMinAmount = this.hamlets.reduce(function (prev, curr) {
        return prev.amount < curr.amount ? prev : curr;
      });
      this.minAmountFishing = hamletMinAmount.amount;
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

  clickedCircle(index: number, name: string) {
    this.hamletName = name;
    this.clickSidenavRight(index);
  }

  private clickSidenavRight(index: number) {
    if (!this.isClosedSidenavRight) {
      this.isClosedSidenavRight = true;
      this.fishingPageService.getHamletsDescription(index).subscribe(res => {
        this.hamletsDescription = res;
      });
    } else {
      if (index) {
        this.isClosedSidenavRight = true;
        this.fishingPageService.getHamletsDescription(index).subscribe(res => {
          this.hamletsDescription = res;
        });
      } else {
        this.isClosedSidenavRight = false;
      }
    }
  }
}
