import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Clase } from 'src/app/interfaces/clases';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GraficaService {

  constructor( private http:  HttpClient) { }
  private baseUrl: string = environment.baseUrl;

  obtenerClases(): any {

    const url = `${this.baseUrl}/clases/getClases`;
    const req = this.http.get<Clase[]>(url);
   
    let clases: Observable<Clase[]> = req.pipe( 
      pluck('clasesDB')
    );
    
    clases.subscribe( clasesArr => {


      const ll: any = clasesArr.reduce( (acc, el) => ({
        ...acc,
        [el.professorName]: 
          { 
            profesorName: el.professorName,
            materia: el.nombreMateria
          }
      }), {} );
      console.log(ll);
    
    
    })

  };


}
