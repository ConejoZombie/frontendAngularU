import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Clase } from 'src/app/interfaces/clases';
import { ClaseService } from 'src/app/services/clase/clase.service';
import Swal from 'sweetalert2';
import { ListClasesComponent } from '../list-clases/list-clases.component';

@Component({
  selector: 'app-edit-clase',
  templateUrl: './edit-clase.component.html',
  styleUrls: ['./edit-clase.component.css']
})
export class EditClaseComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({

    studentName: [ this.data.studentName, [Validators.required, Validators.minLength(3)]],
    nota1: [ this.data.nota1 ,[ Validators.max(100), Validators.min(0)] ],
    nota2: [ this.data.nota3 ,[ Validators.max(100), Validators.min(0)] ],
    nota3: [ this.data.nota3 ,[ Validators.max(100), Validators.min(0)] ]

  });

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<ListClasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Clase,
    private claseService: ClaseService
  ) { }

  ngOnInit(): void {
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

  editar(id: string): void {

    const formValue: Clase = this.miFormulario.value;

    this.claseService.editarClase(formValue, id).subscribe( ok => {
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
