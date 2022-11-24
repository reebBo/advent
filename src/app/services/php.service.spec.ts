import { TestBed } from '@angular/core/testing';

import { PhpService } from './php.service';

describe('PhpService', () => {
  let service: PhpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
