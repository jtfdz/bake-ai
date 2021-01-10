import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentesModule } from 'src/app/modules/componentes/componentes.module';
import { PrimerInicioComponent } from './primer-inicio.component';

describe('PrimerInicioComponent', () => {
  let component: PrimerInicioComponent;
  let fixture: ComponentFixture<PrimerInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ComponentesModule ]
      declarations: [ PrimerInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimerInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
