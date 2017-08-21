import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user: User = new User();

  constructor() {
    this.user.username = '';
    this.user.email = '';
    this.user.password = '';
  }

  ngOnInit() {
  }

}
