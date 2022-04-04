import { TestBed } from '@angular/core/testing';

import { FlyApiService } from './fly-api.service';

describe('FlyApiService', () => {
  let service: FlyApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlyApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
