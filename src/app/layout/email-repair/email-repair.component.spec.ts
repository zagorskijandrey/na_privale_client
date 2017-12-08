import {async, ComponentFixture, fakeAsync, inject, TestBed, tick, getTestBed} from '@angular/core/testing';
import {EmailRepairComponent} from './email-repair.component';
import {Component, DebugElement, Injector} from '@angular/core';
import {Location} from '@angular/common';
import {By} from '@angular/platform-browser';
import {SharedModule} from '../../shared/shared.module';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {RegistrationService} from '../../shared/services/registration.service';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MockTranslateLoader} from '../../shared/mock/mock-translate-loader';

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

// export class MockTranslateLoader implements TranslateLoader {
//   private translations: any;
//
//   constructor(translations: any){
//     this.translations = translations;
//   }
//
//   getTranslation(lang: string): Observable<any> {
//     return Observable.of(this.translations);
//   }
// }

class MockRegistrationService {
}

const translations = {
  "email_repair": {
    "row_1": "Вы можете воспользоваться указанной ранее электронной почтой.",
    "row_2": "Если к email привязаны несколько пользователей,",
    "row_3": "то результатом будет последний зарегистрированный.",
    "search_by_email": "Найти по email",
    "entry": "Войти в существующий аккаунт"
  }
};

describe('EmailRepairComponent', () => {
  let comp:EmailRepairComponent;
  let fixture:ComponentFixture<EmailRepairComponent>;

  let debugElementButton:DebugElement;
  let button:HTMLElement;

  let debugElementsP:DebugElement[];
  let p:HTMLElement;

  let translate:TranslateService;
  let injector:Injector;

  let location, router;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, RouterTestingModule.withRoutes([
        {path: 'signin', component: SigninMockComponent}
      ]), BrowserAnimationsModule,
        TranslateModule.forRoot({
          loader: {provide: TranslateLoader, useFactory: () => new MockTranslateLoader(translations)},
        })],
      declarations: [EmailRepairComponent, RoutingComponent, SigninMockComponent],
      providers: [{provide: RegistrationService, useClass: MockRegistrationService}]
    });
    injector = getTestBed();
    translate = injector.get(TranslateService);

    fixture = TestBed.createComponent(EmailRepairComponent);
    comp = fixture.componentInstance;
    debugElementButton = fixture.debugElement.query(By.css('button'));
    button = debugElementButton.nativeElement;
    button.innerText = 'submit';

    debugElementsP = fixture.debugElement.queryAll(By.css('p'));
    p = debugElementsP[0].nativeElement;
  });

  beforeEach(inject([Router, Location], (_router:Router, _location:Location) => {
    location = _location;
    router = _router;
  }));

  beforeEach(fakeAsync(() => {
    translate.use('ru');
    fixture.detectChanges();
    setInputValue('input', 'zagorskyi.andrii@gmail.com');
  }));

  it('should include the first paragraph of the page', () => {
    expect(p.textContent).toContain('воспользоваться указанной ранее электронной')
  });

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

  function setInputValue(selector:string, value:string) {
    fixture.detectChanges();
    tick();

    const input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('input'));
    tick();
  }
});
