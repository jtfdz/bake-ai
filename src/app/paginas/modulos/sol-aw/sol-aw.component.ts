import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { toHiragana, toKatakana, isHiragana  } from 'wanakana';
declare const setInputToWaka: any;

@Component({
  selector: 'app-sol-aw',
  templateUrl: './sol-aw.component.html',
  styleUrls: ['./sol-aw.component.css']
})
export class SolAwComponent implements OnInit {

	@Input() dataSol: any[] = [];
	@Output() respuestaSol: EventEmitter<any> = new EventEmitter<any>();
  	@Output() sigueSol: EventEmitter<any> = new EventEmitter<any>();

	respuesta: string = '';
	respuestaTraducida: string = '';
	acertado: boolean = false;

	constructor(private componentesService: ComponentesService) { }

	ngOnInit(): void {
		setInputToWaka('respuesta-sol', this.dataSol[1]) 
	}

	activarAudio(): void{
		//mejorar loading: un spinner mientras carga XD
		this.componentesService.reproducirAudio(this.dataSol[0])
	}

	solRespuesta(): void{ 
		this.respuestaTraducida = isHiragana(this.dataSol[1])? toHiragana(this.respuesta): toKatakana(this.respuesta); 
		if(this.respuestaTraducida == this.dataSol[1]){
			this.acertado = true;
			this.respuestaSol.emit(true);
		}else{
			this.respuestaSol.emit(false);
		}
	}


	avanzarModulo(): void{
		this.sigueSol.emit(true);
		this.respuesta = '';
		this.respuestaTraducida = '';
		this.acertado = false;
	}

}


