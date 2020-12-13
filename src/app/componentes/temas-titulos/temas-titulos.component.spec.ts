import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasTitulosComponent } from './temas-titulos.component';

describe('TemasTitulosComponent', () => {
  let component: TemasTitulosComponent;
  let fixture: ComponentFixture<TemasTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasTitulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
