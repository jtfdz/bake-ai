import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
declare const getEbCN: any;

@Component({
  selector: 'app-arbol-vr',
  templateUrl: './arbol-vr.component.html',
  styleUrls: ['./arbol-vr.component.css']
})
export class ArbolVrComponent implements OnInit {

	@Input() dataArbol: any[] = [];
  	@Output() respuestaArbol: EventEmitter<any> = new EventEmitter<any>();
  	@Output() sigueArbol: EventEmitter<any> = new EventEmitter<any>();

	respuesta: string = '';
  	acertado: boolean = false;
  	gustoUsuario: string = '';
  	dioRespuesta: boolean = false;

	constructor(private componentesService: ComponentesService) { }

	ngOnInit(): void {
	    this.componentesService.getGustoUsuario().subscribe(
	     gustoUsuario => this.gustoUsuario = gustoUsuario
	    ); 
		//console.log(this.dataArbol)
	}

	//mejorar: ya al final, podria hacer una función base pa esto XD porque lo repito mucho besos
	arbolClick(evento: any){
	    let arbolBoton = getEbCN('button-respuesta');
	    for (var i = 0; i < arbolBoton.length; i++) {
	      arbolBoton[i].className = arbolBoton[i].className.replace(" is-dark", " is-light");
	    }
	    evento.currentTarget.className = 'button is-dark is-medium button-respuesta';
	    this.respuesta = evento.currentTarget.innerText;	
	}

	arbolRespuesta(){
		this.dioRespuesta = true;
	    if(this.respuesta == this.dataArbol[0]){
	      this.acertado = true;
	      this.respuestaArbol.emit(true);
	    }else{
	      this.respuestaArbol.emit(false);
	    }
	}

	avanzarModulo(): void{
		this.sigueArbol.emit(true);
		this.respuesta = '';
		this.acertado = false;
		this.dioRespuesta = false;
		let arbolBoton = getEbCN('button-respuesta');
		for (var i = 0; i < arbolBoton.length; i++) {
		  arbolBoton[i].className = arbolBoton[i].className.replace(" is-dark", " is-light");
		}
	}


}
