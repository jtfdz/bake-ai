import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModulosComponent } from './header-modulos.component';

describe('HeaderModulosComponent', () => {
  let component: HeaderModulosComponent;
  let fixture: ComponentFixture<HeaderModulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderModulosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderModulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
