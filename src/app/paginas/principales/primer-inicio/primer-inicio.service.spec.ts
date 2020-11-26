import { TestBed } from '@angular/core/testing';

import { PrimerInicioService } from './primer-inicio.service';

describe('PrimerInicioService', () => {
  let service: PrimerInicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimerInicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
