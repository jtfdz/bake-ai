import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoInstruccionesSolComponent } from './contenido-instrucciones-sol.component';

describe('ContenidoInstruccionesSolComponent', () => {
  let component: ContenidoInstruccionesSolComponent;
  let fixture: ComponentFixture<ContenidoInstruccionesSolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenidoInstruccionesSolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoInstruccionesSolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
