import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasTabsTeoriaComponent } from './temas-tabs-teoria.component';

describe('TemasTabsTeoriaComponent', () => {
  let component: TemasTabsTeoriaComponent;
  let fixture: ComponentFixture<TemasTabsTeoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasTabsTeoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasTabsTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
