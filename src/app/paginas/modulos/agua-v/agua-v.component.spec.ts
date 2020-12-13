import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AguaVComponent } from './agua-v.component';

describe('AguaVComponent', () => {
  let component: AguaVComponent;
  let fixture: ComponentFixture<AguaVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AguaVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AguaVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
