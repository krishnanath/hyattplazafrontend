import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VipcardComponent } from './vipcard.component';

describe('VipcardComponent', () => {
  let component: VipcardComponent;
  let fixture: ComponentFixture<VipcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VipcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VipcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
