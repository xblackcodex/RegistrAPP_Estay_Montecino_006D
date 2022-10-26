import { TestBed } from '@angular/core/testing';

import { Ingresado2Guard } from './ingresado2.guard';

describe('Ingresado2Guard', () => {
  let guard: Ingresado2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Ingresado2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
