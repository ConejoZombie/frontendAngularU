import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Materias } from 'src/app/interfaces/materias';
import Swal from 'sweetalert2';
import { MateriaService } from '../../../services/materia/materia.service';
import { EditMateriaComponent } from '../edit-materia/edit-materia.component';
import { NewMateriaComponent } from '../new-materia/new-materia.component';

@Component({
  selector: 'app-list-materia',
  templateUrl: './list-materia.component.html',
  styleUrls: ['./list-materia.component.css']
})
export class ListMateriaComponent implements OnInit {

  materias: Materias[] = [];


  constructor(private materiasService: MateriaService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.materiasService.obtenerTodos().subscribe(materias => {

      this.materias = materias;
    }
    );

  }

  CrearMateria(): void {

    const dialogRef = this.dialog.open(NewMateriaComponent, {
      width: '600px',
      height: '420px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {

      this.materias.push(result.data);

    });


  }

  borrarMateria(materia: Materias): void {

    Swal.fire({
      title: `¿Desea eliminar la materia ${materia.nombreMateria}, grupo ${materia.grupo}?`,
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si',
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {

        this.materiasService.borrarMateria(materia._id).subscribe(ok => {

          Swal.fire({
            position: 'top-end',
            icon: ok == true ? 'success' : 'error',
            title: ok == true ? 'Eliminado' : ok,
            showConfirmButton: false,
            timer: 1500
          });

          this.materias = [];
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

  editarMateria(materiaParam: Materias) {

    const dialogRef = this.dialog.open(EditMateriaComponent, {
      width: '600px',
      height: '420px',
      disableClose: true,
      data: {
        _id: materiaParam._id,
        nombreMateria: materiaParam.nombreMateria,
        horario: materiaParam.horario,
        cupos: materiaParam.cupos,
        grupo: materiaParam.grupo
      }
    });

    dialogRef.afterClosed().subscribe(result => {

      this.materias.push({
        _id: result.data._id,
        nombreMateria: result.data.nombreMateria,
        horario: result.data.horario,
        cupos: result.data.cupos,
        grupo: result.data.grupo,
        professorName: result.data.professorName

      });

      this.materias = [];
      this.ngOnInit();


    });




  };

}
