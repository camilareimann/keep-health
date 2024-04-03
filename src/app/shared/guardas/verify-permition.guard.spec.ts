import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { verifyPermitionGuard } from './verify-permition.guard';

describe('verifyPermitionGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => verifyPermitionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
