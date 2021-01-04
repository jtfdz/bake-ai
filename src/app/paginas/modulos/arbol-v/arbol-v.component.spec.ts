import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolVComponent } from './arbol-v.component';

describe('ArbolVComponent', () => {
  let component: ArbolVComponent;
  let fixture: ComponentFixture<ArbolVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbolVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbolVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
