import { Component, OnInit } from '@angular/core';
import {RegistrationService} from '../../shared/services/registration.service';

@Component({
  selector: 'app-email-repair',
  templateUrl: './email-repair.component.html',
  styleUrls: ['./email-repair.component.css']
})
export class EmailRepairComponent implements OnInit {

  email: String;

  constructor(private registrationService: RegistrationService) {
  }

  ngOnInit() {
    this.registrationService.initUserByEmail(this.email).subscribe(res => this.email = res);
  }

}
