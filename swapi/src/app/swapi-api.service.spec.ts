import { TestBed, inject } from '@angular/core/testing';

import { SwapiApiService } from './swapi-api.service';

describe('SwapiApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwapiApiService]
    });
  });

  it('should be created', inject([SwapiApiService], (service: SwapiApiService) => {
    expect(service).toBeTruthy();
  }));
});
