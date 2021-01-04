import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';
import { TemasService } from 'src/app/servicios/temas/temas.service';

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.css'],
})
export class OrigenComponent implements OnInit {


	@Input() moduloActivado: string = '';
	@Input() moduloData: any[] = [];
	@Output() respuestaOrigen: EventEmitter<any> = new EventEmitter<any>();
	@Output() siguienteModulo: EventEmitter<any> = new EventEmitter<any>();

	constructor(private modulosService: ModulosService) { }

	ngOnInit(): void {
	}

	public avanzarModulo(respuesta: any): void {
		this.siguienteModulo.emit(respuesta);
	}

	//mejorar XD algo tendria que hacer teoria respondida con iniciar el kana no iniciado 
	public integrarRespuesta(respuesta: any): void {
		if(respuesta['weight'] != 'teoria_respondida') this.modulosService.setWeightsArray(respuesta['weight'])
		this.respuestaOrigen.emit(respuesta['acierto']);
	}





}