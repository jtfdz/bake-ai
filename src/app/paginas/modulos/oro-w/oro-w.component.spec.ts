import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OroWComponent } from './oro-w.component';

describe('OroWComponent', () => {
  let component: OroWComponent;
  let fixture: ComponentFixture<OroWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OroWComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OroWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
