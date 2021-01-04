import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GustosTabsComponent } from './gustos-tabs.component';

describe('GustosTabsComponent', () => {
  let component: GustosTabsComponent;
  let fixture: ComponentFixture<GustosTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GustosTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GustosTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
