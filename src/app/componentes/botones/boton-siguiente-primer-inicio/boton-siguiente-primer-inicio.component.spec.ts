import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonSiguientePrimerInicioComponent } from './boton-siguiente-primer-inicio.component';

describe('BotonSiguientePrimerInicioComponent', () => {
  let component: BotonSiguientePrimerInicioComponent;
  let fixture: ComponentFixture<BotonSiguientePrimerInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonSiguientePrimerInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonSiguientePrimerInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
