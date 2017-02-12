/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ConsultaApiService } from './consulta-api.service';

describe('ConsultaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsultaApiService]
    });
  });

  it('should ...', inject([ConsultaApiService], (service: ConsultaApiService) => {
    expect(service).toBeTruthy();
  }));
});
