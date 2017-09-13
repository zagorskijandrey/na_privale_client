/**
 * Created by AZagorskyi on 06.09.2017.
 */

import {Injectable} from '@angular/core';
import {ExtractService} from './extract.service';
import {Http, Response} from '@angular/http';
import {Router} from '@angular/router';
import {User} from '../models/user';
import {Observable} from 'rxjs/Observable';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RegistrationService extends ExtractService {
  constructor(protected http: Http, protected router: Router) {
    super(router);
  }

  registration(user: User): Observable<User> {
    return this.http.post(environment.api + 'registration', JSON.stringify(user)).map(this.getUserWithResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  private getUserWithResponse(res: Response): User {
    const body = this.getResponseBody(res).registration;
    return Object.assign(new User, body);
  }

  initUserByEmail(email: String): Observable<String> {
    return this.http.post(environment.api + 'email_repair', {email: email}).map(this.getEmailWithResponse.bind(this))
      .catch(this.handleError.bind(this));
  }

  private getEmailWithResponse(res: Response): String {
    const body = this.getResponseBody(res).email;
    return body.toString();
  }
}
