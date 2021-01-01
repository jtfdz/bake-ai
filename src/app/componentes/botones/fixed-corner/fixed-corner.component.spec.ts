import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedCornerComponent } from './fixed-corner.component';

describe('FixedCornerComponent', () => {
  let component: FixedCornerComponent;
  let fixture: ComponentFixture<FixedCornerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedCornerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedCornerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
