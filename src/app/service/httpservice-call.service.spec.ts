import { TestBed } from '@angular/core/testing';

import { HTTPServiceCallService } from './httpservice-call.service';

describe('HTTPServiceCallService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HTTPServiceCallService = TestBed.get(HTTPServiceCallService);
    expect(service).toBeTruthy();
  });
});
