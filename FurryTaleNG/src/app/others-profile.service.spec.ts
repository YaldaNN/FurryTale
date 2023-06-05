import { TestBed } from '@angular/core/testing';

import { OthersProfileService } from './others-profile.service';

describe('OthersProfileService', () => {
  let service: OthersProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OthersProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
