import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolAwComponent } from './sol-aw.component';

describe('SolAwComponent', () => {
  let component: SolAwComponent;
  let fixture: ComponentFixture<SolAwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolAwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolAwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
