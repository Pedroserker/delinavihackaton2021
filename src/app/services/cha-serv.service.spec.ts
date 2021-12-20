import { TestBed } from '@angular/core/testing';

import { ChaServService } from './cha-serv.service';

describe('ChaServService', () => {
  let service: ChaServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
