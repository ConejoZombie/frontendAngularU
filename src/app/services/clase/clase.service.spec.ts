import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClaseService } from './clase.service';
import { HttpClientModule } from '@angular/common/http';

describe('Pruebas en ClaseService', () => {
  let service: ClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
    
    service = TestBed.inject(ClaseService);
  });

  it('Debe de regresar las clases en base de datos', () => {
    expect(service.obtenerTodos()).toBeTruthy();
  });

});
