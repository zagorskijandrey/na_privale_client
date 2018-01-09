import {Injectable} from "@angular/core";
import {Subject} from "rxjs/Rx";
import {LoaderState} from "../models/loader-state";
/**
 * Created by andrey on 09.01.2018.
 */

@Injectable()

export class LoaderService {

  private loaderSubject = new Subject<LoaderState>();

  loaderState = this.loaderSubject.asObservable();

  constructor() { }

  show() {
    this.loaderSubject.next(<LoaderState>{show: true});
  }

  hide() {
    this.loaderSubject.next(<LoaderState>{show: false});
  }
}
