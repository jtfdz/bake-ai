import { Component, OnInit, Input  } from '@angular/core';
declare const getFromStore: any;

@Component({
  selector: 'app-temas-inferiores-inicio',
  templateUrl: './temas-inferiores-inicio.component.html',
  styleUrls: ['./temas-inferiores-inicio.component.css']
})
export class TemasInferioresInicioComponent implements OnInit {

  @Input() nombreTema: string = '';
  @Input() urlTema: string = '';
  @Input() colorTema: string = '';
  progreso: number = 3;
  imagenNombre: string = '';
  
  
  constructor() { }

  ngOnInit(): void {
  	this.progreso = getFromStore('progreso.'+this.nombreTema+'.porcentaje');
    //¿esto podría mejorar?
  	if(this.progreso>=0 && this.progreso<25){ 
  		this.imagenNombre = 'gato015';
  	}else if(this.progreso>=25 && this.progreso<50){
  		this.imagenNombre = 'gato2550';
  	}else if(this.progreso>=50 && this.progreso<75){
  		this.imagenNombre = 'gato5075';
  	}else if(this.progreso>=75 && this.progreso<100){
  		this.imagenNombre = 'gato75100';
  	}else if(this.progreso==100){
  		this.imagenNombre = 'gato100';
  	}

  }

}
