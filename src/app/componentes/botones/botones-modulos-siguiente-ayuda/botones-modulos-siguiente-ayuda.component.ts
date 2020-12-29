import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare const modalFunction: any;

@Component({
  selector: 'app-botones-modulos-siguiente-ayuda',
  templateUrl: './botones-modulos-siguiente-ayuda.component.html',
  styleUrls: ['./botones-modulos-siguiente-ayuda.component.css']
})
export class BotonesModulosSiguienteAyudaComponent implements OnInit {

    @Input() acertado: boolean = false;
    @Input() botonHabilitado: boolean = false;
    @Input() textoExplicacion: string = '';
    @Input() colorBoton: string = '';
    @Input() nombreModulo: string = '';
	@Output() respuestaModulo: EventEmitter<any> = new EventEmitter<any>();
	@Output() siguienteModulo: EventEmitter<any> = new EventEmitter<any>();


	constructor() { }

	ngOnInit(): void {
	}

	moduloRespuesta(): void{
		this.respuestaModulo.emit(true);
		modalFunction(1, '#moduloResponde');
	}

	avanzarModulo(): void{
	    modalFunction(2, '#moduloResponde');
	   	this.siguienteModulo.emit(true);
	}

}
