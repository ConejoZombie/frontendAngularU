import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Materias } from 'src/app/interfaces/materias';
import { MateriaResponse } from 'src/app/interfaces/materias';
import { Observable, of } from 'rxjs';
import { catchError, map, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  private baseUrl: string = environment.baseUrl
  private arr:  Materias[] = []

  constructor( private http: HttpClient ) { }

  obtenerTodos(): Observable<Materias[]> {

    const url = `${this.baseUrl}/materias/getMaterias`;
    const req = this.http.get<Materias[]>(url);

    return req.pipe( pluck('materiasDb') );

  };

  crearMateria( materia: Materias ) {

    const url = `${this.baseUrl}/materias/newMateria`;
    const { nombreMateria, horario, cupos, grupo } = materia;
    const body = {  nombreMateria, horario, cupos, grupo };

    
   return this.http.post<MateriaResponse>(url, body)
    .pipe(
    
      map( resp => resp.ok),
      catchError( err => of(err.error.msg) ) 
    );
  
  };

  
  editarMateria( materia: Materias, id: string ) {

    const url = `${this.baseUrl}/materias/editMateria/${id}`;
    const { nombreMateria, horario, cupos, grupo } = materia;
    const body = {  nombreMateria, horario, cupos, grupo };

    
   return this.http.patch<MateriaResponse>(url, body)
    .pipe(
    
      map( resp => resp.ok),
      catchError( err => of(err.error.msg) ) 
    );
  
  };




  borrarMateria( id: string ) {

    const url = `${this.baseUrl}/materias/deleteMateria/${id}`;

    return this.http.delete<MateriaResponse>(url)
      .pipe(
        map( resp => resp.ok),
        catchError( err => of(err.error.msg) ) 
      )

  };

}
