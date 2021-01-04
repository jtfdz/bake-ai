import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasTabsTeoriaContenidoComponent } from './temas-tabs-teoria-contenido.component';

describe('TemasTabsTeoriaContenidoComponent', () => {
  let component: TemasTabsTeoriaContenidoComponent;
  let fixture: ComponentFixture<TemasTabsTeoriaContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasTabsTeoriaContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasTabsTeoriaContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
