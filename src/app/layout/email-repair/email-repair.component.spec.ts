import {async, ComponentFixture, fakeAsync, inject, TestBed, tick} from '@angular/core/testing';
import {EmailRepairComponent} from './email-repair.component';
import {Component, DebugElement, Injectable} from '@angular/core';
import {Location} from '@angular/common';
import {By} from '@angular/platform-browser';
import {SharedModule} from '../../shared/shared.module';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {RegistrationService} from '../../shared/services/registration.service';

@Component({
  template: `
    <router-outlet></router-outlet>
  `
})
class RoutingComponent {
}

@Component({
  template: ''
})
class SigninMockComponent {
}

class MockRegistrationService {
}

describe('EmailRepairComponent', () => {
  let comp: EmailRepairComponent;
  let fixture: ComponentFixture<EmailRepairComponent>;
  let debugElementButton: DebugElement;
  let button: HTMLElement;

  let location, router;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes([
        {path: 'signin', component: SigninMockComponent}
      ])],
      declarations: [EmailRepairComponent, RoutingComponent, SigninMockComponent],
      providers: [{provide: RegistrationService, useClass: MockRegistrationService}]
    });
    fixture = TestBed.createComponent(EmailRepairComponent);
    comp = fixture.componentInstance;
    debugElementButton = fixture.debugElement.query(By.css('button'));
    button = debugElementButton.nativeElement;
    button.innerText = 'submit';
  });

  beforeEach(inject([Router, Location], (_router: Router, _location: Location) => {
    location = _location;
    router = _router;
  }));

  beforeEach(fakeAsync(() => {
    setInputValue('input', 'zagorskyi.andrii@gmail.com');
  }));

  it('link of router is correct', async(() => {
    const fix = TestBed.createComponent(RoutingComponent);
    fix.detectChanges();
    router.navigate(['/signin']).then(() => {
      expect(location.path()).toBe('/signin');
    });
  }));

  it('should allow me to set a bound input field', async(() => {
    expect(comp.email_repair).toEqual('zagorskyi.andrii@gmail.com');
  }));

  it('should return true if email correct', async(() => {
    expect(comp.isValidEmailRepair).toBe(true);
  }));

  it('it\'s email', async(() => {
    expect(comp.email_repair).toContain('@');
  }));

  function setInputValue(selector: string, value: string) {
    fixture.detectChanges();
    tick();

    const input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }
});
