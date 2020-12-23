import { Component, OnInit, Input } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { toHiragana, toKatakana, isHiragana, toRomaji  } from 'wanakana';
declare const setInputToWaka: any;
declare const modalFunction: any;

@Component({
  selector: 'app-fuego-aw',
  templateUrl: './fuego-aw.component.html',
  styleUrls: ['./fuego-aw.component.css']
})
export class FuegoAwComponent implements OnInit {

	@Input() dataFuego: any[] = [];

	respuesta: string = '';
	respuestaTraducida: string = '';
	acertado: boolean = false;
	respuestaCorrecta: string = '';

	constructor(private componentesService: ComponentesService) { }

	ngOnInit(): void {
		setInputToWaka('respuesta-fuego', this.dataFuego[0]) 
		this.respuestaCorrecta = toRomaji(this.dataFuego[0]);
		console.log(this.dataFuego)
	}

	activarAudio(kana: string): void{
		//mejorar loading: un spinner mientras carga XD
		this.componentesService.reproducirAudio(kana)
	}

	fuegoRespuesta(): void{ 
		this.respuestaTraducida = isHiragana(this.dataFuego[0])? toHiragana(this.respuesta): toKatakana(this.respuesta); 
		if(this.respuestaTraducida == this.dataFuego[0]){
			this.acertado = true;
			//this.respuestaSol.emit(true);
		}else{
			//this.respuestaSol.emit(false);
		}
		modalFunction(1, '#fuegoResponde');
	}


	avanzarModulo(): void{
		this.respuesta = '';
		this.respuestaTraducida = '';
		this.acertado = false;
	}

}
