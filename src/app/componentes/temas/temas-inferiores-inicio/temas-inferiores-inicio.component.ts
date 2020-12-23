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


  // mejora O NO
  // asignarFoto(bool: boolean, urlImg: string): void{
  //   if(bool){ this.imagenNombre = urlImg;}
  //   return bool;
  // }


  // constructor() { }

  // ngOnInit(): void {
  //   this.progreso = getFromStore('progreso.'+this.nombreTema+'.porcentaje');
  //   this.asignarFoto((this.progreso>=0 && this.progreso<25), 'gato015')
  //   this.asignarFoto((this.progreso>=25 && this.progreso<50), 'gato2550')
  //   this.asignarFoto((this.progreso>=50 && this.progreso<75), 'gato5075')
  //   this.asignarFoto((this.progreso>=75 && this.progreso<100), 'gato75100')
  //   this.asignarFoto((this.progreso==100), 'gato100')
  // }





}
