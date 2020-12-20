import { Component, OnInit } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

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

  modulosObj: IndexObj = {}
  modulosStr: IndexStr = {};

  //10 de los nuevos, 5 de los viejos
  arrayOfModulos: string[] = ['teoria', 'luna', 'sol', 'luna', 'tierra', 'fuego', 'oro']
  indexOfModulos: number = 0;

  tituloModulo: string = '';
  tipoModulo: string = '';
  colorModulo: string = '';
  estiloMayorRetencion: string = '';

  constructor(private componentesService: ComponentesService) { }


   llenarInfo(): void{
    this.tituloModulo = this.modulosStr['nombre'];
    this.tipoModulo = this.modulosStr['tipo'];
    this.colorModulo = this.modulosStr['color'];
  }


  ngOnInit(): void {
    this.componentesService.getEstiloMayorRetencion().subscribe(
     estiloMayorRetencion => this.estiloMayorRetencion = estiloMayorRetencion
    ); 

    this.modulosObj = {
    "teoria": {
      "nombre": "teoría para tu estilo", 
      "tipo": "por ahora, destacas con un estilo de aprendizaje "+this.estiloMayorRetencion+".",
      "color": "light"
    },
    "luna": {
      "nombre": "luna 月", 
      "tipo": "visual y escritura",
      "color": "danger"
    },
    "sol": {
      "nombre": "sol 日", 
      "tipo": "auditiva y escritura",
      "color": "warning"
    },
    "oro": {
      "nombre": "oro 金", 
      "tipo": "escritura",
      "color": "warning"
    },
    "arbol": {
      "nombre": "árbol 木", 
      "tipo": "visual",
      "color": "warning-dark"
    },
    "tierra": {
      "nombre": "tierra　土", 
      "tipo": "visual",
      "color": "warning-dark"
    },
    "agua": {
      "nombre": "agua 水", 
      "tipo": "visual",
      "color": "info"
    },
    "fuego": {
      "nombre": "fuego 火", 
      "tipo": "auditiva y escritura",
      "color": "primary"
    }
  };


  	this.modulosStr = this.modulosObj[this.arrayOfModulos[0]];
  	this.llenarInfo();

  }

  avanzarModulo(): void{
  	this.indexOfModulos = this.indexOfModulos+1;
  	this.modulosStr = this.modulosObj[this.arrayOfModulos[this.indexOfModulos]]
  	this.llenarInfo();
  }




}
