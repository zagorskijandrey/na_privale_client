/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {HomeComponent} from './home.component';
import {SharedModule} from "../../shared/shared.module";

describe('HomeComponent', () => {
  let comp: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [HomeComponent]
    });
    fixture = TestBed.createComponent(HomeComponent);
    comp = fixture.componentInstance;
    comp.typewriter_text = 'Самыми крупными из пойманных рыб всегда бывают те, что сорвались с крючка - Юджин Филд;' +
      'Одни рыболовы ловят рыбу, другие всю жизнь ее только подкармливают.;';
  });

  // it('should create', () => {
  //   expect(comp.typewriter_text).toContain('подкармливают');
  // });

  function setInputValue(selector: string, value: string) {
    fixture.detectChanges();
    tick();

    const input = fixture.debugElement.query(By.css(selector)).nativeElement;
    input.value = value;
    input.dispatchEvent(new Event('p'));
    tick();
  }

  // it('ok', fakeAsync(() => {
  //   // setInputValue('p', 'подкармливают');
  //   comp.typingCallback(comp);
  //   tick(500);
  //   fixture.detectChanges();
  //
  //   fixture.whenStable().then(() => {
  //     const typingText = fixture.debugElement.query(By.css('p'));
  //     expect(typingText).toBeDefined();
  //   });
  // }));
});
