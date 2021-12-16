import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MateriasRoutingModule } from './materias-routing.module';
import { ListMateriaComponent } from './list-materia/list-materia.component';
import { NewMateriaComponent } from './new-materia/new-materia.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';
import { EditMateriaComponent } from './edit-materia/edit-materia.component';



@NgModule({
  declarations: [
    ListMateriaComponent,
    NewMateriaComponent,
    EditMateriaComponent
  ],
  entryComponents:[ NewMateriaComponent ],
  imports: [
    CommonModule,
    MateriasRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class MateriasModule { }
