import { TestBed } from '@angular/core/testing';

import { LocalizaoService } from './localizao.service';

describe('LocalizaoService', () => {
  let service: LocalizaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalizaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
