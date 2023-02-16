import { TestBed } from '@angular/core/testing';

import { SearchstringService } from './searchstring.service';

describe('SearchstringService', () => {
  let service: SearchstringService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchstringService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
