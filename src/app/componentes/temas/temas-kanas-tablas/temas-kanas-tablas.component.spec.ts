import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasKanasTablasComponent } from './temas-kanas-tablas.component';

describe('TemasKanasTablasComponent', () => {
  let component: TemasKanasTablasComponent;
  let fixture: ComponentFixture<TemasKanasTablasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasKanasTablasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasKanasTablasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
