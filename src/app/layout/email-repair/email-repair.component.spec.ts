import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailRepairComponent } from './email-repair.component';

describe('EmailRepairComponent', () => {
  let component: EmailRepairComponent;
  let fixture: ComponentFixture<EmailRepairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailRepairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
