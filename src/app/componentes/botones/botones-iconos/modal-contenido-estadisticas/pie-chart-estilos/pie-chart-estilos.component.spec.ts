import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartEstilosComponent } from './pie-chart-estilos.component';

describe('PieChartEstilosComponent', () => {
  let component: PieChartEstilosComponent;
  let fixture: ComponentFixture<PieChartEstilosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PieChartEstilosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PieChartEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
