import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemasKanjiTablaComponent } from './temas-kanji-tabla.component';

describe('TemasKanjiTablaComponent', () => {
  let component: TemasKanjiTablaComponent;
  let fixture: ComponentFixture<TemasKanjiTablaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemasKanjiTablaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemasKanjiTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
