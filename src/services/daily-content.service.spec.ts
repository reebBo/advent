import { TestBed } from '@angular/core/testing';

import { DailyContentService } from './daily-content.service';

describe('DailyContentService', () => {
  let service: DailyContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DailyContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
