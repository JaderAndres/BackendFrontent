import { TestBed } from '@angular/core/testing';

import { TipoinspeccionService } from './tipoinspeccion.service';

describe('TipoinspeccionService', () => {
  let service: TipoinspeccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoinspeccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
