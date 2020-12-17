import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSlideDropdownContentComponent } from './first-slide-dropdown-content.component';

describe('FirstSlideDropdownContentComponent', () => {
  let component: FirstSlideDropdownContentComponent;
  let fixture: ComponentFixture<FirstSlideDropdownContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstSlideDropdownContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSlideDropdownContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
