import { TestBed } from '@angular/core/testing';

import { UsereSrvice } from './user.service';

describe('GitService', () => {
  let service: UsereSrvice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsereSrvice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
