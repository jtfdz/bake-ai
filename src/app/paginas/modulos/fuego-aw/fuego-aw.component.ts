import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { toHiragana, toKatakana, isHiragana, toRomaji  } from 'wanakana';
declare const setInputToWaka: any;

@Component({
  selector: 'app-fuego-aw',
  templateUrl: './fuego-aw.component.html',
  styleUrls: ['./fuego-aw.component.css']
})
export class FuegoAwComponent implements OnInit {

	@Input() dataFuego: any[] = [];
  	@Output() respuestaFuego: EventEmitter<any> = new EventEmitter<any>();
  	@Output() sigueFuego: EventEmitter<any> = new EventEmitter<any>();

	respuesta: string = '';
	respuestaTraducida: string = '';
	acertado: boolean = false;

	constructor(private componentesService: ComponentesService) { }

	ngOnInit(): void {
		setInputToWaka('respuesta-fuego', this.dataFuego[0]) 
	}


	activarAudio(kana: string): void{
		//mejorar loading: un spinner mientras carga XD
		this.componentesService.reproducirAudio(kana)
	}

	fuegoRespuesta(): void{ 
		this.respuestaTraducida = isHiragana(this.dataFuego[0])? toHiragana(this.respuesta): toKatakana(this.respuesta); 
		if(this.respuestaTraducida == this.dataFuego[0]){
			this.acertado = true;
			this.respuestaFuego.emit(true);
		}else{
			this.respuestaFuego.emit(false);
		}
	}


	avanzarModulo(): void{
		this.sigueFuego.emit(true);
		this.respuesta = '';
		this.respuestaTraducida = '';
		this.acertado = false;
	}

}
