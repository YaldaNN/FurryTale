import { TestBed } from '@angular/core/testing';

import { ReadPostService } from './read-post.service';

describe('ReadPostService', () => {
  let service: ReadPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReadPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
