import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesIconosTemasComponent } from './botones-iconos-temas.component';

describe('BotonesIconosTemasComponent', () => {
  let component: BotonesIconosTemasComponent;
  let fixture: ComponentFixture<BotonesIconosTemasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesIconosTemasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesIconosTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
