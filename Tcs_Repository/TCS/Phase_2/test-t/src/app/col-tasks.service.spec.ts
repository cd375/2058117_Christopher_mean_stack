import { TestBed } from '@angular/core/testing';

import { ColTasksService } from './col-tasks.service';

describe('ColTasksService', () => {
  let service: ColTasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColTasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
