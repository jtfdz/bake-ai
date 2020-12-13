import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OroArComponent } from './oro-ar.component';

describe('OroArComponent', () => {
  let component: OroArComponent;
  let fixture: ComponentFixture<OroArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OroArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OroArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
