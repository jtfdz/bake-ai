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
	dioRespuesta: boolean = false;

	constructor(private componentesService: ComponentesService) { }

	ngOnInit(): void {
		setInputToWaka('respuesta-sol', this.dataSol[1]) 
	}

	activarAudio(): void{
		this.componentesService.reproducirAudio(this.dataSol[0], true)
	}

	solRespuesta(): void{ 
		this.dioRespuesta = true;
		this.respuestaTraducida = isHiragana(this.dataSol[1])? toHiragana(this.respuesta): toKatakana(this.respuesta); 
		if(this.respuestaTraducida == this.dataSol[1]){
			this.acertado = true;
			this.respuestaSol.emit({acierto: true, weight: 'aw_acierto'});
		}else{
			this.respuestaSol.emit({acierto: false, weight: 'aw_fallo'});
		}
	}


	avanzarModulo(): void{
		this.dioRespuesta = false;
		this.sigueSol.emit(true);
		this.respuesta = '';
		this.respuestaTraducida = '';
		this.acertado = false;
	}

}


