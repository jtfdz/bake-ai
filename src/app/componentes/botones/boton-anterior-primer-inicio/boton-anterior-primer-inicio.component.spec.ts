import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonAnteriorPrimerInicioComponent } from './boton-anterior-primer-inicio.component';

describe('BotonAnteriorPrimerInicioComponent', () => {
  let component: BotonAnteriorPrimerInicioComponent;
  let fixture: ComponentFixture<BotonAnteriorPrimerInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonAnteriorPrimerInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonAnteriorPrimerInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
