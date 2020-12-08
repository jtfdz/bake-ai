import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasInferioresInicioComponent } from './temas-inferiores-inicio.component';

describe('TemasInferioresInicioComponent', () => {
  let component: TemasInferioresInicioComponent;
  let fixture: ComponentFixture<TemasInferioresInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasInferioresInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasInferioresInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
