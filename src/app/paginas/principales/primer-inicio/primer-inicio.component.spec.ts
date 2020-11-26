import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimerInicioComponent } from './primer-inicio.component';

describe('PrimerInicioComponent', () => {
  let component: PrimerInicioComponent;
  let fixture: ComponentFixture<PrimerInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimerInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
