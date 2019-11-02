import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestservicesComponent } from './guestservices.component';

describe('GuestservicesComponent', () => {
  let component: GuestservicesComponent;
  let fixture: ComponentFixture<GuestservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
