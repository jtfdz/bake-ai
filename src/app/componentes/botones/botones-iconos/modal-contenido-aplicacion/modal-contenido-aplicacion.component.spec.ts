import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalContenidoAplicacionComponent } from './modal-contenido-aplicacion.component';

describe('ModalContenidoAplicacionComponent', () => {
  let component: ModalContenidoAplicacionComponent;
  let fixture: ComponentFixture<ModalContenidoAplicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalContenidoAplicacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalContenidoAplicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
