import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MateriaService } from '../../../services/materia/materia.service';
import { Materias } from '../../../interfaces/materias';
import { MatDialogRef } from '@angular/material/dialog';
import { ListClasesComponent } from '../list-clases/list-clases.component';
import Swal from 'sweetalert2';
import { ClaseService } from '../../../services/clase/clase.service';
import { Clase } from '../../../interfaces/clases';

@Component({
  selector: 'app-new-clase',
  templateUrl: './new-clase.component.html',
  styleUrls: ['./new-clase.component.css']
})
export class NewClaseComponent implements OnInit {


  NombreMaterias: Materias[] =[];

  miFormulario: FormGroup = this.fb.group({

    studentName: [ '', [Validators.required, Validators.minLength(3)]],
    idMateria: ['', [ Validators.required ]],
    nota1: [ 0 ,[ Validators.max(100), Validators.min(0)] ],
    nota2: [ 0 ,[ Validators.max(100), Validators.min(0)] ],
    nota3: [ 0 ,[ Validators.max(100), Validators.min(0)] ]

  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ListClasesComponent>,
    private materiasService: MateriaService,
    private claseService: ClaseService
  ) { }

  ngOnInit(): void {

    this.materiasService.obtenerTodos().subscribe(
      materias => {
        this.NombreMaterias = materias;
      }
    );

    console.log('Nombre de las materias', this.NombreMaterias)

 

  }

  campoEsValido(campo: string) {

    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
      
  };

  buttonHidden() {
    return this.miFormulario.invalid 
  };

  closeDialog(){
    this.dialogRef.close();
    this.miFormulario.reset();
  };

  changeSuit(e: any) {
    this.miFormulario.get('grupo')!.setValue(e.target.value, {
       onlySelf: true
    })
  };

  guardar(): void {


    const formValue: Clase = this.miFormulario.value;

    this.claseService.crearClase(formValue).subscribe( ok => {
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

  



}
