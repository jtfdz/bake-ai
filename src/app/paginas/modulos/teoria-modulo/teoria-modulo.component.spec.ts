import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeoriaModuloComponent } from './teoria-modulo.component';

describe('TeoriaModuloComponent', () => {
  let component: TeoriaModuloComponent;
  let fixture: ComponentFixture<TeoriaModuloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeoriaModuloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeoriaModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
