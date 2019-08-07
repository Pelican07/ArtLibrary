import { TestBed } from '@angular/core/testing';

import { ArtService } from '../services/art.service';

describe('ArtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtService = TestBed.get(ArtService);
    expect(service).toBeTruthy();
  });
});
