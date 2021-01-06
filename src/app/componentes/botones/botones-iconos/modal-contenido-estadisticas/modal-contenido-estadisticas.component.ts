import { Component, OnInit } from '@angular/core';
declare const getFromStore: any;

@Component({
  selector: 'app-modal-contenido-estadisticas',
  templateUrl: './modal-contenido-estadisticas.component.html',
  styleUrls: ['./modal-contenido-estadisticas.component.css']
})
export class ModalContenidoEstadisticasComponent implements OnInit {

	constructor() { }


	public barChartOptionsIntro = {
		scaleShowVerticalLines: false,
		responsive: true,
		scales: {
	            xAxes: [{
	               gridLines: {
	                  display: false
	               }
	            }],
	            yAxes: [{
					gridLines: {
					  display: false
					},
		             ticks: {
		                beginAtZero: true,
		                display: false
		            }
	            }]
	       },
	    legend: {
	        display: false
	    },
	};
	public barChartLabelsIntro = ['tus estadísticas'];
	public barChartDataIntro = [
	{minBarLength: 2, data: [4], label: 'x'},
	{data: [5], label: 'y'},
	{data: [6], label: 'z'},
	];




	public doughnutChartType = 'doughnut';

	public doughnutChartLabelsHiragana = ['hiragana', 'faltante'];
  	public doughnutChartDataHiragana = [getFromStore('progreso.hiragana.porcentaje'), 100-getFromStore('progreso.hiragana.porcentaje')];
	public donutColorsHiragana =[{ backgroundColor: [ "LightPink", "lightgrey"] }];

	public doughnutChartLabelsKatakana = ['katakana', 'faltante'];
  	public doughnutChartDataKatakana = [getFromStore('progreso.katakana.porcentaje'), 100-getFromStore('progreso.katakana.porcentaje')];
	public donutColorsKatakana =[{ backgroundColor: [ "Moccasin", "lightgrey"] }];

	public doughnutChartLabelsKanji = ['kanji', 'faltante'];
  	public doughnutChartDataKanji = [getFromStore('progreso.kanji.porcentaje'), 100-getFromStore('progreso.kanji.porcentaje')];
	public donutColorsKanji =[{ backgroundColor: [ "lightblue", "lightgrey"] }];



	public barChartOptions = {
	scaleShowVerticalLines: false,
	responsive: true
	};
	public barChartLabels = ['veces estudiado', 'aciertos', 'fallos'];
	public barChartType = 'bar';
	public barChartLegend = true;
	public barChartData = [
	{data: [getFromStore('progreso.hiragana.vecesEstudiado'), getFromStore('progreso.hiragana.aciertos'), getFromStore('progreso.hiragana.fallos')], label: 'hiragana'},
	{data: [getFromStore('progreso.katakana.vecesEstudiado'), getFromStore('progreso.katakana.aciertos'), getFromStore('progreso.katakana.fallos')], label: 'katakana'},
	{data: [getFromStore('progreso.kanji.vecesEstudiado'), getFromStore('progreso.kanji.aciertos'), getFromStore('progreso.kanji.fallos')], label: 'kanji'},
	];








	ngOnInit(): void {

	}






}
