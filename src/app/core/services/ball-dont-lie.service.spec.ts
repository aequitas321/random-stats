import { TestBed } from '@angular/core/testing';

import { BallDontLieService } from './ball-dont-lie.service';

describe('BallDontLieService', () => {
  let service: BallDontLieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BallDontLieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
