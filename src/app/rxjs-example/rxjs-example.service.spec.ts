import { TestBed } from '@angular/core/testing';

import { RxjsExampleService } from './rxjs-example.service';

describe('RxjsExampleService', () => {
  let service: RxjsExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RxjsExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
