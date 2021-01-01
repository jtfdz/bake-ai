import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputUsuarioNombreComponent } from './input-usuario-nombre.component';

describe('InputUsuarioNombreComponent', () => {
  let component: InputUsuarioNombreComponent;
  let fixture: ComponentFixture<InputUsuarioNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputUsuarioNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputUsuarioNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
