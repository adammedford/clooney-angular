import { TestBed } from '@angular/core/testing';
import { ClooneyService } from './clooney.service';

describe('ClooneyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClooneyService = TestBed.get(ClooneyService);
    expect(service).toBeTruthy();
  });
});
