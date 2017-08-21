import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
/**
 * Created by AZagorskyi on 11.07.2017.
 */
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('token')) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to signin page
    this.router.navigate(['/signin']);
    return false;
  }
}
