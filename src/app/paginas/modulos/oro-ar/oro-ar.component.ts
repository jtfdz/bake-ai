import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { toHiragana, toKatakana, isHiragana, toRomaji  } from 'wanakana';
declare const modalFunction: any;

@Component({
  selector: 'app-oro-ar',
  templateUrl: './oro-ar.component.html',
  styleUrls: ['./oro-ar.component.css']
})
export class OroArComponent implements OnInit {

	@Input() dataOro: any[] = [];
  	@Output() respuestaOro: EventEmitter<any> = new EventEmitter<any>();
  	@Output() sigueOro: EventEmitter<any> = new EventEmitter<any>();

	respuestas: string[] = ["","","","",""];
	respuestasTraducidas: string[] = ["","","","",""];
	acertadoBien: any[] = [];
	acertadoMal: any[] = []; // mejorar OJO PELUO CON ANY


	constructor() { }


	ngOnInit(): void {
		//console.log(this.dataOro)
	}

	isEmptyStringArray(){
	 for(var i=0; i<this.respuestas.length; i++){ 
	  	if(this.respuestas[i]==''){ return true; }
	  }
	  return false;
	}

	oroRespuesta(): void{ 
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
			this.respuestaOro.emit(false);
		}else{
			this.respuestaOro.emit(true);
		}

		 modalFunction(1, '#oroResponde');
	}

	avanzarModulo(): void{
		this.sigueOro.emit(true);
		modalFunction(2, '#oroResponde');
		this.respuestas = ["","","","",""];
		this.respuestasTraducidas = ["","","","",""];
		this.acertadoBien = [];
		this.acertadoMal = [];
	}

}
