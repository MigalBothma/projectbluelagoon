import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NitroxGasBlenderComponent } from './nitrox-gas-blender.component';

describe('NitroxGasBlenderComponent', () => {
  let component: NitroxGasBlenderComponent;
  let fixture: ComponentFixture<NitroxGasBlenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NitroxGasBlenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NitroxGasBlenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
