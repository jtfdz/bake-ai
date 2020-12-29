import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesExaminacionComponent } from './contenido-instrucciones-examinacion.component';

describe('ContenidoInstruccionesExaminacionComponent', () => {
  let component: ContenidoInstruccionesExaminacionComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesExaminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesExaminacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesExaminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
