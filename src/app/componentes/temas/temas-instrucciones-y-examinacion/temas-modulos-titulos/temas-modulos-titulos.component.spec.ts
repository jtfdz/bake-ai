import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasModulosTitulosComponent } from './temas-modulos-titulos.component';

describe('TemasModulosTitulosComponent', () => {
  let component: TemasModulosTitulosComponent;
  let fixture: ComponentFixture<TemasModulosTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasModulosTitulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasModulosTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
