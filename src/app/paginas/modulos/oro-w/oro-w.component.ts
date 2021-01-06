import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ShepherdPasosService } from 'src/app/servicios/principales/shepherd-pasos.service';
import { toHiragana, toKatakana, isHiragana, toRomaji  } from 'wanakana';
declare const modalFunction: any;

interface Array<T> {
	fill(value: T): Array<T>;
}

@Component({
  selector: 'app-oro-w',
  templateUrl: './oro-w.component.html',
  styleUrls: ['./oro-w.component.css']
})
export class OroWComponent implements OnInit {

	@Input() dataOro: any[] = [];
  	@Output() respuestaOro: EventEmitter<any> = new EventEmitter<any>();
  	@Output() sigueOro: EventEmitter<any> = new EventEmitter<any>();

	respuestas: string[] = [];
	respuestasTraducidas: string[] = [];
	acertadoBien: any[] = [];
	acertadoMal: any[] = []; // mejorar OJO PELUO CON ANY
	dioRespuesta: boolean = false;


	constructor(public shepherdPasosService: ShepherdPasosService) { }


	ngOnInit(): void {
		this.respuestas = Array<string>(this.dataOro[0].length).fill("")
		this.respuestasTraducidas = Array<string>(this.dataOro[0].length).fill("")
	}

	isEmptyStringArray(){
	 for(var i=0; i<this.respuestas.length; i++){ 
	  	if(this.respuestas[i]==''){ return true; }
	  }
	  return false;
	}

	oroRespuesta(): void{ 
		this.dioRespuesta = true;
		for (var i = 0; i < this.respuestas.length; i++) {
			this.respuestasTraducidas[i] = isHiragana(this.dataOro[0][0])? toHiragana(this.respuestas[i]): toKatakana(this.respuestas[i]);
		}
		for (var i = 0; i < this.respuestasTraducidas.length; i++) {
			if(this.respuestasTraducidas[i] == this.dataOro[0][i]){
				this.acertadoBien.push({respuesta: this.respuestas[i], kana: this.respuestasTraducidas[i]})
			}else{
				this.acertadoMal.push({respuesta: this.respuestas[i], correcta: toRomaji(this.dataOro[0][i]), kana: this.dataOro[0][i]})
			}
		}

		if(this.acertadoMal.length>0){
			this.respuestaOro.emit({acierto: false, weight: 'w_fallo'});
		}else{
			this.respuestaOro.emit({acierto: true, weight: 'w_acierto'});
		}

		 modalFunction(1, '#oroResponde');
	}

	avanzarModulo(): void{
		this.dioRespuesta = false;
		this.sigueOro.emit(true);
		modalFunction(2, '#oroResponde');
		this.respuestas = ["","","","",""];
		this.respuestasTraducidas = ["","","","",""];
		this.acertadoBien = [];
		this.acertadoMal = [];
	}

}
