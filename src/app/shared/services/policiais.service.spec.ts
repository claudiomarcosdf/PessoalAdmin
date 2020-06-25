import { TestBed } from '@angular/core/testing';

import { PoliciaisService } from './policiais.service';

describe('PoliciaisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoliciaisService = TestBed.get(PoliciaisService);
    expect(service).toBeTruthy();
  });
});
