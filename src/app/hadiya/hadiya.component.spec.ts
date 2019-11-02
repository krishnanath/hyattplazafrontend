import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HadiyaComponent } from './hadiya.component';

describe('HadiyaComponent', () => {
  let component: HadiyaComponent;
  let fixture: ComponentFixture<HadiyaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HadiyaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HadiyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
