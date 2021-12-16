import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Materias } from 'src/app/interfaces/materias';
import { MateriaService } from 'src/app/services/materia/materia.service';
import Swal from 'sweetalert2';
import { ListMateriaComponent } from '../list-materia/list-materia.component';

@Component({
  selector: 'app-edit-materia',
  templateUrl: './edit-materia.component.html',
  styleUrls: ['./edit-materia.component.css']
})
export class EditMateriaComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    nombreMateria:  'Frances' ,
    horario: '8:00am-10:00am',
    cupos: 10,
    grupo: 1
  };

  constructor(private materiaService: MateriaService, public dialogRef: MatDialogRef<ListMateriaComponent>, @Inject(MAT_DIALOG_DATA) public data: Materias,  public dialog: MatDialog) { }

  ngOnInit(): void {
  }


  nombreValido(): boolean {
    return this.miFormulario?.controls.nombre?.invalid
      && this.miFormulario?.controls.nombre?.touched;
  }

  guardar( id: string ): void {


    const formValue: Materias = this.miFormulario.value;


    this.materiaService.editarMateria(formValue, id).subscribe( ok => {
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
    
    console.log("formulario posteado");
    this.dialogRef.close({data: formValue});

  }

  closeDialog(){
    this.dialogRef.close();
    this.miFormulario.reset();
  }


}
