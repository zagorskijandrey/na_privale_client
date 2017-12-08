import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {FishComponent} from './fish/fish.component';
import {Fish} from '../../../../shared/models/fish';
import {DateAdapter, NativeDateAdapter} from '@angular/material';
import {Router} from '@angular/router';
import {FishingPage} from "../../../../shared/models/fishing-page";
import {LocationService} from "../../../../shared/services/location.service";
import {FishingPageService} from "../../../../shared/services/fishing-page.service";

@Component({
  selector: 'app-user-statistics-fishing-page-creator',
  templateUrl: './fishing-page-creator.component.html',
  styleUrls: ['./fishing-page-creator.component.css']
})
export class FishingPageCreatorComponent implements OnInit {
  @ViewChild('dynamicComponentContainerFish', {read: ViewContainerRef}) dynamicComponentContainer: ViewContainerRef;
  fishingPage: FishingPage;

  availableCountries: Array<{ id: number, name: string }>;
  availableProvinces: Array<{ id: number, name: string }>;
  availableRegions: Array<{ id: number, name: string }>;
  availableHamlets: Array<{ id: number, name: string }>;

  constructor(dateAdapter: DateAdapter<NativeDateAdapter>, private componentFactoryResolver: ComponentFactoryResolver,
              private fishingPageService: FishingPageService, public router: Router,
              private locationService: LocationService) {
    dateAdapter.setLocale('ru');
  }

  ngOnInit() {
    this.fishingPage = new FishingPage;
    this.fishingPage.fishes.push(new Fish());

    this.locationService.getCountries().subscribe(res => {
      this.availableCountries = res;
    });

    const factory = this.componentFactoryResolver.resolveComponentFactory(FishComponent);
    const ref = this.dynamicComponentContainer.createComponent(factory);
    ref.instance.fishes = this.fishingPage.fishes;
    ref.changeDetectorRef.detectChanges();
  }

  public removeFish() {
    const amountFishes = this.fishingPage.fishes.length;
    if (amountFishes > 1) {
      this.dynamicComponentContainer.detach(amountFishes);
      this.fishingPage.fishes.pop();
    }
  }

  public addFish() {
    const amountFishes = this.fishingPage.fishes.length;
    if (amountFishes < 5) {
      this.fishingPage.fishes.push(new Fish());

      const factory = this.componentFactoryResolver.resolveComponentFactory(FishComponent);
      const ref = this.dynamicComponentContainer.createComponent(factory);
      ref.instance.fishes = this.fishingPage.fishes;
      ref.instance.amountFishes = amountFishes;
      ref.changeDetectorRef.detectChanges();
    }
  }

  public saveFishingPage() {
    this.fishingPageService.saveFishingPage(this.fishingPage).subscribe(res => {
      this.router.navigate(['statistic/fishing']);
    });
  }

  public pickCountry(event: any) {
    if (event != null) {
      const idCountry = this.availableCountries.filter(res => res.name === event)[0].id;
      this.locationService.getProvinces(idCountry).subscribe(res => {
        this.availableProvinces = res;
      });
    }
  }

  public pickProvince(event: any) {
    if (event != null) {
      const idProvince = this.availableProvinces.filter(res => res.name === event)[0].id;
      this.fishingPage.id_province = idProvince;
      this.locationService.getRegions(idProvince).subscribe(res => {
        this.availableRegions = res;
      });
    }
  }

  public pickRegion(event: any) {
    if (event != null) {
      const idRegion = this.availableRegions.filter(res => res.name === event)[0].id;
      this.locationService.getHamlets(idRegion).subscribe(res => {
        this.availableHamlets = res;
      });
    }
  }

  public pickHamlet(event: any) {
    if (event != null) {
      this.fishingPage.id_hamlet = this.availableHamlets.filter(res => res.name === event)[0].id;
    }
  }
}
