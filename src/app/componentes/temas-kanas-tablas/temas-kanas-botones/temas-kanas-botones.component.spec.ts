import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasKanasBotonesComponent } from './temas-kanas-botones.component';

describe('TemasKanasBotonesComponent', () => {
  let component: TemasKanasBotonesComponent;
  let fixture: ComponentFixture<TemasKanasBotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasKanasBotonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasKanasBotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
