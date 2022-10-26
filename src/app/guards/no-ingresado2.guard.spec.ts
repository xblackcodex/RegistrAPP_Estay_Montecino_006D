import { TestBed } from '@angular/core/testing';

import { NoIngresado2Guard } from './no-ingresado2.guard';

describe('NoIngresado2Guard', () => {
  let guard: NoIngresado2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoIngresado2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
