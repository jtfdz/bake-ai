import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolVrComponent } from './arbol-vr.component';

describe('ArbolVrComponent', () => {
  let component: ArbolVrComponent;
  let fixture: ComponentFixture<ArbolVrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolVrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolVrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
