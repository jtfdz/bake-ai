import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolAudioComponent } from './sol-audio.component';

describe('SolAudioComponent', () => {
  let component: SolAudioComponent;
  let fixture: ComponentFixture<SolAudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolAudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
