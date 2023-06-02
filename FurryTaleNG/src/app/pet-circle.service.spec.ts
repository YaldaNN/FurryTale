import { TestBed } from '@angular/core/testing';

import { PetCircleService } from './pet-circle.service';

describe('PetCircleService', () => {
  let service: PetCircleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetCircleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
