import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerPulsoRojoComponent } from './spinner-pulso-rojo.component';

describe('SpinnerPulsoRojoComponent', () => {
  let component: SpinnerPulsoRojoComponent;
  let fixture: ComponentFixture<SpinnerPulsoRojoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerPulsoRojoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerPulsoRojoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
