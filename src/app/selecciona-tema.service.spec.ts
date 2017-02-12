/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SeleccionaTemaService } from './selecciona-tema.service';

describe('SeleccionaTemaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeleccionaTemaService]
    });
  });

  it('should ...', inject([SeleccionaTemaService], (service: SeleccionaTemaService) => {
    expect(service).toBeTruthy();
  }));
});
