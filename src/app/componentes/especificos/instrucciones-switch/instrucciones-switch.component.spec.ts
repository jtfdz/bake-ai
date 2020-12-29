import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstruccionesSwitchComponent } from './instrucciones-switch.component';

describe('InstruccionesSwitchComponent', () => {
  let component: InstruccionesSwitchComponent;
  let fixture: ComponentFixture<InstruccionesSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstruccionesSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstruccionesSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
