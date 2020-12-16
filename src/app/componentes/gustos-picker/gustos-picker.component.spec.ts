import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GustosPickerComponent } from './gustos-picker.component';

describe('GustosPickerComponent', () => {
  let component: GustosPickerComponent;
  let fixture: ComponentFixture<GustosPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GustosPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GustosPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
