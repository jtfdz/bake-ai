import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesArbolComponent } from './contenido-instrucciones-arbol.component';

describe('ContenidoInstruccionesArbolComponent', () => {
  let component: ContenidoInstruccionesArbolComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesArbolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesArbolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesArbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
