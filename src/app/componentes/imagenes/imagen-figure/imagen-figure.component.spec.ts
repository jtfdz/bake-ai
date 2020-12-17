import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenFigureComponent } from './imagen-figure.component';

describe('ImagenFigureComponent', () => {
  let component: ImagenFigureComponent;
  let fixture: ComponentFixture<ImagenFigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenFigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenFigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
