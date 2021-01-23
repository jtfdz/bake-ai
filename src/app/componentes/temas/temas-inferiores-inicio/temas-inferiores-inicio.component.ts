import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

declare const getFromStore: any;

@Component({
  selector: 'app-temas-inferiores-inicio',
  templateUrl: './temas-inferiores-inicio.component.html',
})
export class TemasInferioresInicioComponent implements OnInit {

  @Input() nombreTema: string = '';
  @Input() urlTema: string = '';
  @Input() colorTema: string = '';
  progreso: number = 3;
  imagenNombre: string = '';
  
  
  constructor(private componentesService: ComponentesService) { }

  //mejorar

  ngOnInit(): void {
  	this.progreso = getFromStore('progreso.'+this.nombreTema+'.porcentaje').toFixed(2);
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
