import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraVComponent } from './tierra-v.component';

describe('TierraVComponent', () => {
  let component: TierraVComponent;
  let fixture: ComponentFixture<TierraVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierraVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierraVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
