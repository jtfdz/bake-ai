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
	public pieChartData = [estiloPorcentaje('visual'), estiloPorcentaje('auditiva'), estiloPorcentaje('escritura')];
	public pieChartType = 'pie';

	ngOnInit(): void {
	}

}
