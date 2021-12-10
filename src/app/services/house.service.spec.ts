import { TestBed } from '@angular/core/testing';

import { House.Service } from './house.service';

describe('House.ServiceService', () => {
  let service: House.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(House.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
