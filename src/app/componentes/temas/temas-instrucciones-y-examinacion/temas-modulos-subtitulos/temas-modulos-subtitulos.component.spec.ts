import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasModulosSubtitulosComponent } from './temas-modulos-subtitulos.component';

describe('TemasModulosSubtitulosComponent', () => {
  let component: TemasModulosSubtitulosComponent;
  let fixture: ComponentFixture<TemasModulosSubtitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasModulosSubtitulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasModulosSubtitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
