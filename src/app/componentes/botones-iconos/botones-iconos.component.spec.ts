import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesIconosComponent } from './botones-iconos.component';

describe('BotonesIconosComponent', () => {
  let component: BotonesIconosComponent;
  let fixture: ComponentFixture<BotonesIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesIconosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
