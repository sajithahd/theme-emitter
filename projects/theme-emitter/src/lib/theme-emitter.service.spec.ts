import { TestBed } from '@angular/core/testing';

import { ThemeEmitterService } from './theme-emitter.service';

describe('ThemeEmitterService', () => {
  let service: ThemeEmitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeEmitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
