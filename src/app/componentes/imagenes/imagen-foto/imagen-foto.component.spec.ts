import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenFotoComponent } from './imagen-foto.component';

describe('ImagenFotoComponent', () => {
  let component: ImagenFotoComponent;
  let fixture: ComponentFixture<ImagenFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenFotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
