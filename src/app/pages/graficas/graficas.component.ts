import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficaService } from '../../services/graficas/grafica.service';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {
  ngOnInit(): void {
   
    this.graficaService.obtenerClases()

  }

  constructor(private graficaService: GraficaService) { }

  // public doughnutChartLabels: Label[] = [
  //   //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'
  // ];
  // public doughnutChartData: MultiDataSet = [
  //   //[350, 450, 100,290]
  // ];
  // public doughnutChartType: ChartType = 'doughnut';

  // //un arreglo de colores para personalizar la grafica tipo dona
  // public colors: Color[]=[
  //   {
  //     backgroundColor:[
  //       '#57A3E6',
  //       '#5BD2F0',
  //       '#5DD9D1',
  //       '#5BF0BC',
  //       '#57E68B'

  //     ]
  //   }
  // ]

  // constructor( private graficasService: GraficasService) { }

  // ngOnInit(): void {

  //   // this.graficasService.getUsuariosRedesSociales()
  //   //   .subscribe( data => {
  //   //     console.log(data);
  //   //     const labels = Object.keys( data );
  //   //     const values = Object.values( data );

  //   //     this.doughnutChartLabels = labels;
  //   //     this.doughnutChartData.push( values );
  //   //   })

  //   this.graficasService.getUsuariosRedesSocialesDonaData()
  //   .subscribe( ({labels, values}) =>{
  //     this.doughnutChartLabels = labels;
  //     this.doughnutChartData.push( values );
  //   })

  // }

}
