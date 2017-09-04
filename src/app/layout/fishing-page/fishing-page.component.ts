import {
  Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import {DateAdapter, NativeDateAdapter} from '@angular/material';
import {FishingPage} from '../../shared/models/fishing-page';
import {FishComponent} from './fish/fish.component';
import {Fish} from '../../shared/models/fish';
import {FishingPageService} from "../../shared/services/fishing-page.service";

@Component({
  selector: 'app-fishing-page',
  templateUrl: './fishing-page.component.html',
  styleUrls: ['./fishing-page.component.css'],
})
export class FishingPageComponent implements OnInit {
  @ViewChild('dynamicComponentContainerFish', {read: ViewContainerRef}) dynamicComponentContainer: ViewContainerRef;
  fishingPage: FishingPage;

  constructor(dateAdapter: DateAdapter<NativeDateAdapter>, private componentFactoryResolver: ComponentFactoryResolver,
  private fishingPageService: FishingPageService) {
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
    this.fishingPageService.saveFishingPage(this.fishingPage).subscribe(res => res);
  }
}

