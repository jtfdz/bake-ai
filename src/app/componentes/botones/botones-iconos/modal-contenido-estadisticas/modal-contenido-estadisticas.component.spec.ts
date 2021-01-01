import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContenidoEstadisticasComponent } from './modal-contenido-estadisticas.component';

describe('ModalContenidoEstadisticasComponent', () => {
  let component: ModalContenidoEstadisticasComponent;
  let fixture: ComponentFixture<ModalContenidoEstadisticasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContenidoEstadisticasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContenidoEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
