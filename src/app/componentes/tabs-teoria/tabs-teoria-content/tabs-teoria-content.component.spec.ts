import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTeoriaContentComponent } from './tabs-teoria-content.component';

describe('TabsTeoriaContentComponent', () => {
  let component: TabsTeoriaContentComponent;
  let fixture: ComponentFixture<TabsTeoriaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsTeoriaContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTeoriaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
