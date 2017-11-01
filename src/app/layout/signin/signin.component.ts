import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/models/user';
import {AuthService} from '../../shared/services/auth.service';
import {ErrorHandlerService} from '../../shared/services/error-handler.service';
import {ActivatedRoute, NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public user: User;
  returnUrl = '/';

  constructor(private router: Router, private route: ActivatedRoute,
              private authService: AuthService, private errorService: ErrorHandlerService) {
    this.user = new User();
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    this.authService.logout();
    this.authService.login(this.user.username, this.user.password).subscribe(user => {
      this.user = user;
      this.router.navigateByUrl(this.returnUrl);
    }, error => {
      this.openDialog(error);
    });
  }

  private openDialog(error) {
    this.errorService
      .confirm('Ошибка авторизации:', error)
      .subscribe(res => res);
  }

  get isValidUsername() {
    return this.user.username && (this.user.username.length > 3);
  }

  get isValidPassword() {
    if (this.user.password && (this.user.password.length > 5) && (this.user.password.match(/[^A-Za-z0-9_]/g) === null)) {
      return true;
    }
    return false;
  }
}
