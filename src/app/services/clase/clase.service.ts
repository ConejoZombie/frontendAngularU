import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { Clase, ClaseResponse } from '../../interfaces/clases';
import { catchError, map, pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {

  private baseUrl: string = environment.baseUrl


  constructor( private http: HttpClient) { }

  obtenerTodos(): Observable<Clase[]> {

    const url = `${this.baseUrl}/clases/getClases`;
    const req = this.http.get<Clase[]>(url);

    return req.pipe( pluck('clasesDB') );

  };

 
  crearClase( clase: Clase ) {

    const url = `${this.baseUrl}/clases/newClase`;
    const { studentName, idMateria, nota1, nota2, nota3  } = clase;
    const body = {  studentName, idMateria, nota1, nota2, nota3  };

    
   return this.http.post<ClaseResponse>(url, body)
    .pipe(
      map( resp => resp.ok),
      catchError( err => of(err.error.msg) ) 
    );
  
  };

  editarClase( clase: Clase, id: string) {

    const url = `${this.baseUrl}/clases/editClase/${id}`;
    const { studentName, nota1,nota2, nota3 } = clase;
    const body = {  nota1,nota2, nota3 };

    
   return this.http.patch<ClaseResponse>(url, body)
    .pipe(
    
      map( resp => resp.ok),
      catchError( err => of(err.error.msg) ) 
    );


  }

  borrarClase(id: string) {

    const url = `${this.baseUrl}/clases/deleteClase/${id}`;

    return this.http.delete<ClaseResponse>(url)
      .pipe(
        map( resp => resp.ok),
        catchError( err => of(err.error.msg) ) 
      )

  };




}

