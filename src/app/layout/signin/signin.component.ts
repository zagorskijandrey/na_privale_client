import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
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
