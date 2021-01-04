import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosFinalizacionComponent } from './modulos-finalizacion.component';

describe('ModulosFinalizacionComponent', () => {
  let component: ModulosFinalizacionComponent;
  let fixture: ComponentFixture<ModulosFinalizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModulosFinalizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulosFinalizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
