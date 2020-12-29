import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesLunaComponent } from './contenido-instrucciones-luna.component';

describe('ContenidoInstruccionesLunaComponent', () => {
  let component: ContenidoInstruccionesLunaComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesLunaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesLunaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesLunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
