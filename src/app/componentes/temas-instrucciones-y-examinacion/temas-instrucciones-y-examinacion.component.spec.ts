import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasInstruccionesYExaminacionComponent } from './temas-instrucciones-y-examinacion.component';

describe('TemasInstruccionesYExaminacionComponent', () => {
  let component: TemasInstruccionesYExaminacionComponent;
  let fixture: ComponentFixture<TemasInstruccionesYExaminacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasInstruccionesYExaminacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasInstruccionesYExaminacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
