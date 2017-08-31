import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/models/user';
import {AuthService} from '../../shared/services/auth.service';
import {ErrorHandlerService} from '../../shared/services/error-handler.service';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public user: User = new User();

  constructor(private router: Router, private authService: AuthService, private errorService: ErrorHandlerService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user.username, this.user.password).subscribe(user => {
      this.user = user;
      this.navigateToMapPage();
    }, error => {
      this.openDialog(error);
    });
  }

  private navigateToMapPage(url?: string) {

    url = url || this.router.routerState.snapshot.url;

    const navigationExtras: NavigationExtras = {
      queryParams: {'returnUrl': url || this.router.routerState.snapshot.url},
    };
    return this.router.navigate(['/map'], navigationExtras);
  }

  private openDialog(error) {
    this.errorService
      .confirm('Ошибка регистрации:', error)
      .subscribe(res => res);
  }
}
