import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: User = new User();
  public errorMsg = '';

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.user.username = '';
    this.user.password = '';
  }

  login() {
    this.authService.login(this.user.username, this.user.password).subscribe(user => this.user = user);
    // if(!this._service.login(this.user)) {
    //   this.errorMsg = 'Failed to login! try again ...';
    // }
  }
}
