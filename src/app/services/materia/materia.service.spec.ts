import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';

import { MateriaService } from './materia.service';
import { Materias } from '../../interfaces/materias';

describe('MateriaService', () => {
  let service: MateriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
    service = TestBed.inject(MateriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe retornar un Observable<Materias[]>', () => {
    
    const resp = service.obtenerTodos();

    resp.subscribe()

  });

});
