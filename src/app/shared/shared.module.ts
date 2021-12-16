import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    SidemenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    SidemenuComponent,
  ]
})
export class SharedModule { }
