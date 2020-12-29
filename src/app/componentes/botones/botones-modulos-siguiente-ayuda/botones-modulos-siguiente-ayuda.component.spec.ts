import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesModulosSiguienteAyudaComponent } from './botones-modulos-siguiente-ayuda.component';

describe('BotonesModulosSiguienteAyudaComponent', () => {
  let component: BotonesModulosSiguienteAyudaComponent;
  let fixture: ComponentFixture<BotonesModulosSiguienteAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesModulosSiguienteAyudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesModulosSiguienteAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
