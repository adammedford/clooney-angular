import { async, TestBed } from '@angular/core/testing';
import { ClooneyAngularModule } from './clooney-angular.module';

describe('ClooneyAngularModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ClooneyAngularModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ClooneyAngularModule).toBeDefined();
  });
});
