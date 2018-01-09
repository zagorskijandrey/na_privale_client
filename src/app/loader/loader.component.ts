import {Subscription} from "rxjs/Rx";
import {LoaderService} from "../shared/services/loader.service";
import {LoaderState} from "../shared/models/loader-state";
import {OnInit, Component, OnDestroy} from "@angular/core";
/**
 * Created by andrey on 09.01.2018.
 */

@Component({
  selector: 'app-loader',
  templateUrl: 'loader.component.html',
  styleUrls: ['loader.component.css']
})
export class LoaderComponent implements OnInit, OnDestroy {

  show = false;

  private subscription: Subscription;

  constructor(
    private loaderService: LoaderService
  ) { }

  ngOnInit() {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
