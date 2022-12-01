import { TestBed } from '@angular/core/testing';

import { OrderImplService } from './order-impl.service';

describe('OrderImplService', () => {
  let service: OrderImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
