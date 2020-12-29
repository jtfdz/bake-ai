import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesFuegoComponent } from './contenido-instrucciones-fuego.component';

describe('ContenidoInstruccionesFuegoComponent', () => {
  let component: ContenidoInstruccionesFuegoComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesFuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesFuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesFuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
