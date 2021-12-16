import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesRoutingModule } from './clases-routing.module';
import { ListClasesComponent } from './list-clases/list-clases.component';
import { MaterialModule } from 'src/app/material/material.module';
import { NewClaseComponent } from './new-clase/new-clase.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditClaseComponent } from './edit-clase/edit-clase.component';


@NgModule({
  declarations: [
    ListClasesComponent,
    NewClaseComponent,
    EditClaseComponent
  ],
  imports: [
    CommonModule,
    ClasesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ClasesModule { }
