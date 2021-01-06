import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoAudioCargandoComponent } from './aviso-audio-cargando.component';

describe('AvisoAudioCargandoComponent', () => {
  let component: AvisoAudioCargandoComponent;
  let fixture: ComponentFixture<AvisoAudioCargandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvisoAudioCargandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoAudioCargandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
