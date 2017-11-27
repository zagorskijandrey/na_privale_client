import {Component, OnInit} from '@angular/core';
import {RegistrationService} from '../../shared/services/registration.service';

@Component({
  selector: 'app-email-repair',
  templateUrl: './email-repair.component.html',
  styleUrls: ['./email-repair.component.css']
})
export class EmailRepairComponent implements OnInit {

  email_repair: String;

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
  }

  get isValidEmailRepair() {
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.email_repair && this.email_repair.match(pattern) !== null) {
      return true;
    }
    return false;
  }

  compareAndInitUser() {
    this.registrationService.initUserByEmail(this.email_repair).subscribe(res => this.email_repair = res);
  }
}
