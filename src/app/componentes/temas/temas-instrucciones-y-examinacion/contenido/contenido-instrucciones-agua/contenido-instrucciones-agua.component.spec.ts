import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesAguaComponent } from './contenido-instrucciones-agua.component';

describe('ContenidoInstruccionesAguaComponent', () => {
  let component: ContenidoInstruccionesAguaComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesAguaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesAguaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesAguaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
