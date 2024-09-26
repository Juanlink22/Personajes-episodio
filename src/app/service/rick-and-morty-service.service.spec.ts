import { TestBed } from '@angular/core/testing';

import { RickAndMortyServiceService } from './rick-and-morty-service.service';

describe('RickAndMortyServiceService', () => {
  let service: RickAndMortyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickAndMortyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
