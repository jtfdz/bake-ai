import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LunaVwComponent } from './luna-vw.component';

describe('LunaVwComponent', () => {
  let component: LunaVwComponent;
  let fixture: ComponentFixture<LunaVwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunaVwComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunaVwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
