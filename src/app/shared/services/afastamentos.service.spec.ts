import { TestBed } from '@angular/core/testing';

import { AfastamentosService } from './afastamentos.service';

describe('AfastamentosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AfastamentosService = TestBed.get(AfastamentosService);
    expect(service).toBeTruthy();
  });
});
