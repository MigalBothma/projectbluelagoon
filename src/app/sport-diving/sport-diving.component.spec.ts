import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportDivingComponent } from './sport-diving.component';

describe('HomeComponent', () => {
  let component: SportDivingComponent;
  let fixture: ComponentFixture<SportDivingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportDivingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportDivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
