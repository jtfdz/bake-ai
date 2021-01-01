import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ShepherdPasosService } from 'src/app/servicios/principales/shepherd-pasos.service';
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
    @Input() moduloTitulo: string = '';

	@Output() respuestaModulo: EventEmitter<any> = new EventEmitter<any>();
	@Output() siguienteModulo: EventEmitter<any> = new EventEmitter<any>();

	correctoArray: string[] = [];
	incorrectoArray: string[] = [];
	nombreUsuario: string = '';
	elegidoCorrecto: string = '';
	elegidoIncorrecto: string = '';

	constructor(private componentesService: ComponentesService, public shepherdPasosService: ShepherdPasosService) { }

	ngOnChanges(): void{
		this.elegidoCorrecto = this.correctoArray[Math.floor(Math.random() * this.correctoArray.length)]
		this.elegidoIncorrecto = this.incorrectoArray[Math.floor(Math.random() * this.incorrectoArray.length)]
	}

	ngOnInit(): void {
	    this.componentesService.getNombreUsuario().subscribe(
	     nombreUsuario => this.nombreUsuario = nombreUsuario
	    ); 

	    //mejorar ?
	    this.correctoArray.push('¡bieeeeen, '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡así se hace, '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡wow, '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡sigue así, '+this.nombreUsuario+'! :)')
	    this.correctoArray.push('¡miren a '+this.nombreUsuario+'! :o')
	    this.correctoArray.push('¡cuidado con '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡vamos, vamos, '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡y eso es correcto!')
	    this.correctoArray.push('¡felicidades, '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡enséñame tú a mí, '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡ya lo tienes, '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡がんばって, '+this.nombreUsuario+'!')
	    this.correctoArray.push('¡いいな, '+this.nombreUsuario+'さん!')
	    this.correctoArray.push('もうわかられる, '+this.nombreUsuario+'!')

	    this.incorrectoArray.push('¡no te preocupes, '+this.nombreUsuario+'!')
	    this.incorrectoArray.push('¡a la próxima, '+this.nombreUsuario+'! :)')
	    this.incorrectoArray.push('¡ten confianza, '+this.nombreUsuario+'!')
	    this.incorrectoArray.push('¡tú puedes, '+this.nombreUsuario+'!')
	    this.incorrectoArray.push('¡refuerza con la teoría, '+this.nombreUsuario+'!')
	    this.incorrectoArray.push(' :( ')
	    this.incorrectoArray.push('¡y eso es... incorrecto...')
	    this.incorrectoArray.push('estem... ')
	    this.incorrectoArray.push('pues no...')
	    this.incorrectoArray.push('むずかしそう。。。')
	    this.incorrectoArray.push('あれ。。。')
	    this.incorrectoArray.push('ちがう :(')

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
