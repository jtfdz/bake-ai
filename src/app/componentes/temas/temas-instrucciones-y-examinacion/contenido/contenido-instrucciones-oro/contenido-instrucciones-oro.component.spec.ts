import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesOroComponent } from './contenido-instrucciones-oro.component';

describe('ContenidoInstruccionesOroComponent', () => {
  let component: ContenidoInstruccionesOroComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesOroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesOroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesOroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
