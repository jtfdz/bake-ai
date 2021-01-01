import { TestBed } from '@angular/core/testing';

import { ShepherdPasosService } from './shepherd-pasos.service';

describe('ShepherdPasosService', () => {
  let service: ShepherdPasosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShepherdPasosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
