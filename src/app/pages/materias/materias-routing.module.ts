import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListMateriaComponent } from './list-materia/list-materia.component';
import { NewMateriaComponent } from './new-materia/new-materia.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: ListMateriaComponent},
      { path: 'agregar', component: NewMateriaComponent},
      {path: '**', redirectTo: 'listado'},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MateriasRoutingModule { }
