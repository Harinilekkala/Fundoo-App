import { TestBed } from '@angular/core/testing';

import { NoteuserserviceService } from './noteuserservice.service';

describe('NoteuserserviceService', () => {
  let service: NoteuserserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NoteuserserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
