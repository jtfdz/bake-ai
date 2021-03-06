import { Component, OnInit } from '@angular/core';
declare const estiloPorcentaje: any;

@Component({
  selector: 'app-pie-chart-estilos',
  templateUrl: './pie-chart-estilos.component.html',
  styleUrls: ['./pie-chart-estilos.component.css']
})
export class PieChartEstilosComponent implements OnInit {

	constructor() { }

	public pieChartLabels = ['visual', 'auditivo', 'por escritura'];
	public pieChartData = [{
			data: [estiloPorcentaje('visual'), estiloPorcentaje('auditiva'), estiloPorcentaje('escritura')],
			backgroundColor: ["#ED6D79", "#FFDC89", "#71E096"]
		}]
	public pieChartType = 'pie';

	ngOnInit(): void {
	}

}


