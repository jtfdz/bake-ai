import { Component, OnInit } from '@angular/core';
import modulos from 'src/assets/json/modulos.json';

interface IndexObj {
  [index: string]: {};
}

interface IndexStr {
  [index: string]: string;
}


@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  arrayOfModulos: string[] = ['luna', 'sol', 'luna', 'tierra', 'fuego', 'oro']
  modulosObj: IndexObj = modulos;
  modulosStr: IndexStr = {};
  indexOfModulos: number = 0;

  tituloModulo: string = '';
  tipoModulo: string = '';
  colorModulo: string = '';


  constructor() { }

  ngOnInit(): void {
  	this.modulosStr = this.modulosObj[this.arrayOfModulos[0]];
  	this.llenarInfo();
  }

  avanzarModulo(): void{
  	this.indexOfModulos= this.indexOfModulos+1;
  	if(this.indexOfModulos == this.arrayOfModulos.length){
  		this.indexOfModulos = 0;
  	}
  	this.modulosStr = this.modulosObj[this.arrayOfModulos[this.indexOfModulos]]
  	this.llenarInfo();
  }


   llenarInfo(): void{
  	this.tituloModulo = this.modulosStr['nombre'];
  	this.tipoModulo = this.modulosStr['tipo'];
  	this.colorModulo = this.modulosStr['color'];
	}

}
