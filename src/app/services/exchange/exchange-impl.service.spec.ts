import { TestBed } from '@angular/core/testing';

import { ExchangeImplService } from './exchange-impl.service';

describe('ExchangeImplService', () => {
  let service: ExchangeImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExchangeImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
