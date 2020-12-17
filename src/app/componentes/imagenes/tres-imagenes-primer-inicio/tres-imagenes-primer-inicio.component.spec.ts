import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TresImagenesPrimerInicioComponent } from './tres-imagenes-primer-inicio.component';

describe('TresImagenesPrimerInicioComponent', () => {
  let component: TresImagenesPrimerInicioComponent;
  let fixture: ComponentFixture<TresImagenesPrimerInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TresImagenesPrimerInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TresImagenesPrimerInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
