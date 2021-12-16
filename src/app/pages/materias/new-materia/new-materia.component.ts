import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Materias } from 'src/app/interfaces/materias';
import { MateriaService } from '../../../services/materia/materia.service';
import { ListMateriaComponent } from '../list-materia/list-materia.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-new-materia',
  templateUrl: './new-materia.component.html',
  styleUrls: ['./new-materia.component.css']
})
export class NewMateriaComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    nombreMateria:  'Frances' ,
    horario: '8:00am-10:00am',
    cupos: 10,
    grupo: 1,
    professorName: 'Roberto Garcia'
  };

 

  constructor(private materiaService: MateriaService, public dialogRef: MatDialogRef<ListMateriaComponent>, @Inject(MAT_DIALOG_DATA) public data: Materias,  public dialog: MatDialog) {

  }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls.nombre?.invalid
      && this.miFormulario?.controls.nombre?.touched;
  }

  guardar(): void {


    const formValue: Materias = this.miFormulario.value;

    this.materiaService.crearMateria(formValue).subscribe( ok => {
      if(ok == true) {
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ok,
          showConfirmButton: false,
          timer: 1500
    
        });

      } else {

        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: ok,
          showConfirmButton: false,
          timer: 1500
        });

      }
      
    } );
    
    this.dialogRef.close({data: formValue});
    
  };

  closeDialog(){
    this.dialogRef.close();
    this.miFormulario.reset();
  };

}
