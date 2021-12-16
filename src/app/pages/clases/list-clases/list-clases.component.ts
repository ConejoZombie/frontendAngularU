import { Component, OnInit } from '@angular/core';
import { Clase } from 'src/app/interfaces/clases';
import { ClaseService } from '../../../services/clase/clase.service';
import { MatDialog } from '@angular/material/dialog';
import { NewClaseComponent } from '../new-clase/new-clase.component';
import { Materias } from '../../../interfaces/materias';
import { MateriaService } from '../../../services/materia/materia.service';
import Swal from 'sweetalert2';
import { EditClaseComponent } from '../edit-clase/edit-clase.component';


@Component({
  selector: 'app-list-clases',
  templateUrl: './list-clases.component.html',
  styleUrls: ['./list-clases.component.css']
})
export class ListClasesComponent implements OnInit {

  clases: Clase[] = [];
  materias: Materias[] = [];

  constructor( 
    private claseService: ClaseService,
    public dialog: MatDialog,
    private materiasService: MateriaService 
    
  ) { }

  ngOnInit(): void {

    this.materiasService.obtenerTodos().subscribe( materias => {
      this.materias  = materias;
    });
    
    this.claseService.obtenerTodos().subscribe( clases => {
      this.clases = clases; 
    }); 
    
  }

  crearClase(): void {

    const dialogRef = this.dialog.open(NewClaseComponent, {
      width: '600px',
      height: '560px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe( result => {

      this.clases.push(result.data);

    });


  };


  editarClase( clase: Clase ): void {

    const dialogRef = this.dialog.open(EditClaseComponent, {
      width: '600px',
      height: '420px',
      disableClose: true,
      data: {
        _id: clase._id,
        studentName: clase.studentName,
        nota1: clase.nota1,
        nota2: clase.nota2,
        nota3: clase.nota3
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.clases.push(result.data);

      this.clases = [];

     this.ngOnInit();


    });


  }

  borrarClase( clase: Clase ): void {

    
    Swal.fire({
      title: `¿Desea eliminar de la clase a ${clase.studentName}, en la materia ${clase.nombreMateria}.?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.claseService.borrarClase(clase._id).subscribe(ok => {

          Swal.fire({
            position: 'top-end',
            icon: ok == true ? 'success' : 'error',
            title: ok == true ? 'Eliminado' : ok,
            showConfirmButton: false,
            timer: 1500
          });

          this.clases = [];
          this.ngOnInit();


        });

      } else if (result.isDenied) {
        Swal.fire({
          position: 'top-end',
          icon: 'info',
          title: 'Acción cancelada',
          showConfirmButton: false,
          timer: 1500
        });

      }
    })


  };

}

