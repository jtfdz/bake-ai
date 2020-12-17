import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseImagenPrimerInicioComponent } from './base-imagen-primer-inicio.component';

describe('BaseImagenPrimerInicioComponent', () => {
  let component: BaseImagenPrimerInicioComponent;
  let fixture: ComponentFixture<BaseImagenPrimerInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseImagenPrimerInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseImagenPrimerInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
