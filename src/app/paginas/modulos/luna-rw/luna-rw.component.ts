import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { toHiragana, toKatakana, isHiragana  } from 'wanakana';
declare const setInputToWaka: any;
declare const modalFunction: any;

@Component({
  selector: 'app-luna-rw',
  templateUrl: './luna-rw.component.html',
  styleUrls: ['./luna-rw.component.css']
})
export class LunaRwComponent implements OnInit {

	@Input() dataLuna: any[] = [];
	@Output() respuestaLuna: EventEmitter<any> = new EventEmitter<any>();

	respuesta: string = '';
	respuestaTraducida: string = '';
	acertado: boolean = false;


	constructor() { }

	ngOnInit(): void {
		setInputToWaka('respuesta-luna', this.dataLuna[1]) 
		//console.log(this.dataLuna)
	}


	lunaRespuesta(): void{ 
		this.respuestaTraducida = isHiragana(this.dataLuna[0])? toHiragana(this.respuesta): toKatakana(this.respuesta); 
		if(this.respuestaTraducida == this.dataLuna[0]){
			this.acertado = true;
			//this.respuestaSol.emit(true);
		}else{
			//this.respuestaSol.emit(false);
		}
		modalFunction(1, '#lunaResponde');
	}


	avanzarModulo(): void{
		modalFunction(2, '#lunaResponde');
		this.respuesta = '';
		this.respuestaTraducida = '';
		this.acertado = false;
	}


}
