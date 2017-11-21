import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EmailRepairComponent} from './email-repair.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {RegistrationService} from '../../shared/services/registration.service';
import {CommonModule, LocationStrategy} from '@angular/common';
import {MdCardModule, MdInputModule, MdSlideToggleModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {EmailRepairRoutingModule} from './email-repair-routing.module';
import {ActivatedRoute, Router} from '@angular/router';

class MockRegistrationService {
  subscribe: () => {};
}

class MockTranslateService {
}

class MockRouter {
  navigateByUrl(url: string) { return url; }
}

class MockActivatedRoute {
  navigateByUrl(url: string) { return url; }
}

describe('EmailRepairComponent', () => {
  let emailRepairComponent: EmailRepairComponent;
  let fixture: ComponentFixture<EmailRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EmailRepairComponent]
      // imports: [TranslateModule.forRoot(), FormsModule,
      //   CommonModule,
      //   MdCardModule,
      //   MdInputModule,
      //   MdSlideToggleModule,
      //   EmailRepairRoutingModule],
      // providers: [LocationStrategy,
      //   { provide: ActivatedRoute, useClass: MockActivatedRoute },
      //   { provide: Router, useClass: MockRouter },
      //   {provide: TranslateService, useClass: MockTranslateService},
      //   {provide: RegistrationService, useClass: MockRegistrationService}
      // ]
    })
      .compileComponents().then(() => {
      fixture = TestBed.createComponent(EmailRepairComponent);

      emailRepairComponent = fixture.componentInstance;
      emailRepairComponent.email_repair = 'andrey.zagorskyi@gmail.com';
    });
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(EmailRepairComponent);
  //   emailRepairComponent = fixture.componentInstance;
  //   emailRepairComponent.email_repair = '';
  //   // fixture.detectChanges();
  // });

  // it('should return false if email incorrect', () => {
  //   emailRepairComponent.email_repair = 'andrey.zagorskyi';
  //   expect(emailRepairComponent.isValidEmailRepair).toBe(false);
  // });
  it('should return true if email correct', () => {
    emailRepairComponent.email_repair = 'andrey.zagorskyi@gmail.com';
    expect(emailRepairComponent.isValidEmailRepair).toBe(true);
  });
});
