/**
 * Created by AZagorskyi on 26.06.2017.
 */
import {Response} from '@angular/http';
import {isArray, isString} from 'util';
import {Observable} from 'rxjs/Observable';

export abstract class ExtractService {

  protected getResponseBody(response: Response): any {
    // let message = '';
    if (response.ok && response.text()) {
      const data = response.json();
      return data.body;
      // if (data && data.status === 'OK' && data.body) {
      //   return data.body;
      // } else {
      //   if (data && data.error_message) {
      //     if (isArray(data.error_message) && data.error_message.length === 1) {
      //       message = data.error_message[0];
      //       message = isString(message) ? message : JSON.stringify(message);
      //     } else {
      //       message = JSON.stringify(data.error_message);
      //     }
      //   }
      // }
    }
    // throw Error(message);
  }

  protected handleError(error: any) {
    const errMsg = (error && error.message)
      ? error.message
      : ((error && error.status)
        ? `${error.status} - ${error.statusText}`
        : 'Ошибка сервиса!');

    // if (this.alertService) {
    //   this.alertService.error(errMsg);
    // }
    //
    // // AUTH ERROR
    // if (errMsg.indexOf("JWT") > -1) {
    //   this.navigateToLoginPage();
    // }

    return Observable.throw(errMsg);
  }
}
