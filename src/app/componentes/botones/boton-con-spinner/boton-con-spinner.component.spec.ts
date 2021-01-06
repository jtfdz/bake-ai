import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonConSpinnerComponent } from './boton-con-spinner.component';

describe('BotonConSpinnerComponent', () => {
  let component: BotonConSpinnerComponent;
  let fixture: ComponentFixture<BotonConSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonConSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonConSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
