import {Component, OnInit} from '@angular/core';
import {User} from '../../shared/models/user';
import {RegistrationService} from '../../shared/services/registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  confirm_password: string;
  public user: User = new User();

  constructor(private registrationService: RegistrationService) {
    this.user.username = '';
    this.user.email = '';
    this.user.password = '';
    this.confirm_password = '';
  }

  ngOnInit() {
  }

  get isValidEmail() {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.user.email && this.user.email.match(pattern) !== null) {
      return true;
    }
    return false;
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

  get isValidConfirmPassword() {
    return this.confirm_password && this.confirm_password === this.user.password;
  }

  signup() {
    this.registrationService.registration(this.user).subscribe(res => this.user = res);
  }
}
