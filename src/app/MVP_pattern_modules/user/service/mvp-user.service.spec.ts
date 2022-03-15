import { TestBed } from '@angular/core/testing';

import { MvpUserService } from './mvp-user.service';

describe('MvpUserService', () => {
  let service: MvpUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MvpUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
