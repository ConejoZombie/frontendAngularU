import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListClasesComponent } from './list-clases/list-clases.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'listado', component: ListClasesComponent},
      {path: '**', redirectTo: 'listado'},
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClasesRoutingModule { }
