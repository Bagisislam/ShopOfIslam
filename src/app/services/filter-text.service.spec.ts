import { TestBed } from '@angular/core/testing';

import { FilterTextService } from './filter-text.service';

describe('FilterTextService', () => {
  let service: FilterTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
