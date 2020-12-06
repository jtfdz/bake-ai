import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonesIconosModalComponent } from './botones-iconos-modal.component';

describe('BotonesIconosModalComponent', () => {
  let component: BotonesIconosModalComponent;
  let fixture: ComponentFixture<BotonesIconosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonesIconosModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonesIconosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
