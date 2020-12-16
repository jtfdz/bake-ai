import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasDropdownOptionsComponent } from './temas-dropdown-options.component';

describe('TemasDropdownOptionsComponent', () => {
  let component: TemasDropdownOptionsComponent;
  let fixture: ComponentFixture<TemasDropdownOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasDropdownOptionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasDropdownOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
