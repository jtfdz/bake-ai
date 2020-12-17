import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondSlideVarwComponent } from './second-slide-varw.component';

describe('SecondSlideVarwComponent', () => {
  let component: SecondSlideVarwComponent;
  let fixture: ComponentFixture<SecondSlideVarwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondSlideVarwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondSlideVarwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
