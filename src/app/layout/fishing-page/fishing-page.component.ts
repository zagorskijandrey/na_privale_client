import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {DateAdapter, NativeDateAdapter} from '@angular/material';
import {FishingPage} from '../../shared/models/fishing-page';
import {FishComponent} from './fish/fish.component';
import {Fish} from '../../shared/models/fish';

@Component({
  selector: 'app-fishing-page',
  templateUrl: './fishing-page.component.html',
  styleUrls: ['./fishing-page.component.css']
})
export class FishingPageComponent implements OnInit {

  @ViewChild('dynamicComponentContainerFish', {read: ViewContainerRef}) dynamicComponentContainer: ViewContainerRef;
  fishingPage: FishingPage;

  constructor(dateAdapter: DateAdapter<NativeDateAdapter>, private componentFactoryResolver: ComponentFactoryResolver) {
    dateAdapter.setLocale('ru');
  }

  ngOnInit() {
    this.fishingPage = new FishingPage;
    this.fishingPage.fishes.push(new Fish());

    const factory = this.componentFactoryResolver.resolveComponentFactory(FishComponent);
    const ref = this.dynamicComponentContainer.createComponent(factory);
    ref.instance.fishes = this.fishingPage.fishes;
    ref.changeDetectorRef.detectChanges();
  }

  public addFish() {
    if (this.fishingPage.fishes.length < 5) {
      this.fishingPage.fishes.push(new Fish());

      const factory = this.componentFactoryResolver.resolveComponentFactory(FishComponent);
      const ref = this.dynamicComponentContainer.createComponent(factory);
      ref.instance.fishes = this.fishingPage.fishes;
      ref.changeDetectorRef.detectChanges();
    }
  }
}
