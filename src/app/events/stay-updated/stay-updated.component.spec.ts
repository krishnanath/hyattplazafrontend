import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StayUpdatedComponent } from './stay-updated.component';

describe('StayUpdatedComponent', () => {
  let component: StayUpdatedComponent;
  let fixture: ComponentFixture<StayUpdatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StayUpdatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StayUpdatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
