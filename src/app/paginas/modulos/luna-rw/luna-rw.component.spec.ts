import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaRwComponent } from './luna-rw.component';

describe('LunaRwComponent', () => {
  let component: LunaRwComponent;
  let fixture: ComponentFixture<LunaRwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunaRwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaRwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
