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
	dioRespuesta: boolean = false;

	constructor(private componentesService: ComponentesService) { }

	ngOnInit(): void {
		setInputToWaka('respuesta-fuego', this.dataFuego[0]) 
	}


	activarAudio(kana: string): void{
		this.componentesService.reproducirAudio(kana, true)
	}

	fuegoRespuesta(): void{ 
		this.dioRespuesta = true;
		this.respuestaTraducida = isHiragana(this.dataFuego[0])? toHiragana(this.respuesta): toKatakana(this.respuesta); 
		if(this.respuestaTraducida == this.dataFuego[0]){
			this.acertado = true;
			this.respuestaFuego.emit({acierto: true, weight: 'aw_acierto'});
		}else{
			this.respuestaFuego.emit({acierto: false, weight: 'aw_fallo'});
		}
	}


	avanzarModulo(): void{
		this.dioRespuesta = false;
		this.sigueFuego.emit(true);
		this.respuesta = '';
		this.respuestaTraducida = '';
		this.acertado = false;
	}

}
