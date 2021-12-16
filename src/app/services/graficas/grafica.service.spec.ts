import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { GraficaService } from './grafica.service';

describe('GraficaService', () => {
  let service: GraficaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(GraficaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
