import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsModule } from 'ng2-charts';

import { GraficasRoutingModule } from './graficas-routing.module';
import { GraficasComponent } from './graficas.component';


@NgModule({
  declarations: [
    GraficasComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    ChartsModule
  ],
  exports: [
    GraficasComponent
  ]
})
export class GraficasModule { }
