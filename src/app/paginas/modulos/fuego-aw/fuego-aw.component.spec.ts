import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuegoAwComponent } from './fuego-aw.component';

describe('FuegoAwComponent', () => {
  let component: FuegoAwComponent;
  let fixture: ComponentFixture<FuegoAwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuegoAwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuegoAwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
