import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesTierraComponent } from './contenido-instrucciones-tierra.component';

describe('ContenidoInstruccionesTierraComponent', () => {
  let component: ContenidoInstruccionesTierraComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesTierraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesTierraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesTierraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
