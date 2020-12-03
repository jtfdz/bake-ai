import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsteoriaComponent } from './tabsteoria.component';

describe('TabsteoriaComponent', () => {
  let component: TabsteoriaComponent;
  let fixture: ComponentFixture<TabsteoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsteoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsteoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
