import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForthSlideComponent } from './forth-slide.component';

describe('ForthSlideComponent', () => {
  let component: ForthSlideComponent;
  let fixture: ComponentFixture<ForthSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForthSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForthSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
