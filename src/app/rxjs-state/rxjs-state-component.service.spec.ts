import { TestBed } from '@angular/core/testing';

import { RxjsStateComponentService } from './rxjs-state-component.service';

describe('RxjsStateComponentService', () => {
  let service: RxjsStateComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsStateComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
