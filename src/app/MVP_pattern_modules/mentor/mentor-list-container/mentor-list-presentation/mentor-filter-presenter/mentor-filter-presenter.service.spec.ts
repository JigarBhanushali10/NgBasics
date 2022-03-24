import { TestBed } from '@angular/core/testing';

import { MentorFilterPresenterService } from './mentor-filter-presenter.service';

describe('MentorFilterPresenterService', () => {
  let service: MentorFilterPresenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MentorFilterPresenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
