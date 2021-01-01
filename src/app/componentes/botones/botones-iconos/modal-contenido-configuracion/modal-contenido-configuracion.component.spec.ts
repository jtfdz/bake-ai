import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContenidoConfiguracionComponent } from './modal-contenido-configuracion.component';

describe('ModalContenidoConfiguracionComponent', () => {
  let component: ModalContenidoConfiguracionComponent;
  let fixture: ComponentFixture<ModalContenidoConfiguracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContenidoConfiguracionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContenidoConfiguracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
