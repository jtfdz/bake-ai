import { TestBed } from '@angular/core/testing';

import { BulmajsService } from './bulmajs.service';

describe('BulmajsService', () => {
  let service: BulmajsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BulmajsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
