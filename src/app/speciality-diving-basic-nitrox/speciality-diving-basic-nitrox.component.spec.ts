import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialityDivingBasicNitrox } from './speciality-diving-basic-nitrox.component';

describe('HomeComponent', () => {
  let component: SpecialityDivingBasicNitrox;
  let fixture: ComponentFixture<SpecialityDivingBasicNitrox>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityDivingBasicNitrox ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialityDivingBasicNitrox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
