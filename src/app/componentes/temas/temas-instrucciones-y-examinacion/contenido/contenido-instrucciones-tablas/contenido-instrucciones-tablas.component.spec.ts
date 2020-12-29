import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesTablasComponent } from './contenido-instrucciones-tablas.component';

describe('ContenidoInstruccionesTablasComponent', () => {
  let component: ContenidoInstruccionesTablasComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesTablasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
