import {ExtractService} from './extract.service';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {environment} from '../../../environments/environment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user';
import {Router} from '@angular/router';
/**
 * Created by AZagorskyi on 11.07.2017.
 */
@Injectable()
export class AuthService extends ExtractService {
  constructor (protected http: Http, protected router: Router) {
    super(router);
  }

  login(username: string, password: string): Observable <User> {
    return this.http.post(environment.api + 'login', JSON.stringify({username, password})).map(this.handleLogin.bind(this))
      .catch(this.handleError.bind(this));
  }

  handleLogin(res): { token: string } {
    const body = this.getResponseBody(res);
    if (body.token) {
      localStorage.setItem('token', body.token);
      return body;
    } else {
      throw Error('Помилка Авторизації');
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
