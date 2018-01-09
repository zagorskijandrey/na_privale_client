/**
 * Created by AZagorskyi on 26.06.2017.
 */
import {Response} from '@angular/http';
import {isArray, isString} from 'util';
import {Observable} from 'rxjs/Observable';
import {NavigationExtras, Router} from '@angular/router';
import 'rxjs/add/observable/throw';
import {LoaderService} from "./loader.service";

export abstract class ExtractService {

  constructor(protected router: Router, protected loader: LoaderService) {
  }

  protected getResponseBody(response: Response): any {
    setTimeout(() => {
      this.loader.hide();
    }, 5000);
    let message = '';
    if (response.ok && response.text()) {
      const data = response.json();
      // return data.body;
      if (data && data.status === 'OK' && data.body) {
        return data.body;
      } else {
        if (data && data.error_message) {
          if (isArray(data.error_message) && data.error_message.length === 1) {
            message = data.error_message[0];
            message = isString(message) ? message : JSON.stringify(message);
          } else {
            message = JSON.stringify(data);
          }
        }
      }
    }
    throw Error(message);
  }

  protected handleError(error: any) {
    let errMsg = null;
    if (error.message) {
      const data = JSON.parse(error.message);
      errMsg = (data && data.error_message)
        ? data.error_message
        : ((data && data.status)
          ? `${data.status} - ${data.error_message}`
          : 'Ошибка сервиса!');

      if (data.status_code === 401) {
        this.navigateToLoginPage();
      }
    } else {
      errMsg = 'Ошибка сервиса!';
      this.navigateToHomePage();
    }
    // const data = JSON.parse(error.message);
    // const errMsg = (data && data.error_message)
    //   ? data.error_message
    //   : ((data && data.status)
    //     ? `${data.status} - ${data.error_message}`
    //     : 'Ошибка сервиса!');
    //
    // if (data.status_code === 401) {
    //   this.navigateToLoginPage();
    // }

    return Observable.throw(errMsg);
  }

  public navigateToHomePage(url?: string) {

    url = url || this.router.routerState.snapshot.url;

    const navigationExtras: NavigationExtras = {
      queryParams: {'returnUrl': url || this.router.routerState.snapshot.url},
    };
    return this.router.navigate(['/'], navigationExtras);
  }

  public navigateToLoginPage(url?: string) {

    url = url || this.router.routerState.snapshot.url;

    const navigationExtras: NavigationExtras = {
      queryParams: {'returnUrl': url || this.router.routerState.snapshot.url},
    };
    return this.router.navigate(['/signin'], navigationExtras);
  }
}
