import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/models/user';
import {AuthService} from '../../shared/services/auth.service';
import {ErrorHandlerService} from '../../shared/services/error-handler.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public user: User = new User();
  public errorMsg = '';

  constructor(private authService: AuthService, private errorService: ErrorHandlerService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.user.username, this.user.password).subscribe(user => {
      this.user = user;
      }, error => {
        this.openDialog(error);
    });
  }

  private openDialog(error) {
    this.errorService
      .confirm('Ошибка регистрации:', error)
      .subscribe(res => res);
  }
}
