import { TestBed } from '@angular/core/testing';

import { TestQService } from './test-q.service';

describe('TestQService', () => {
  let service: TestQService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestQService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
