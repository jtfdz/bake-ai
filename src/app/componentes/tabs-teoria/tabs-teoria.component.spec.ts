import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTeoriaComponent } from './tabs-teoria.component';

describe('TabsTeoriaComponent', () => {
  let component: TabsTeoriaComponent;
  let fixture: ComponentFixture<TabsTeoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsTeoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTeoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
