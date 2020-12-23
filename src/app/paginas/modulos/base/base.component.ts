import { Component, OnInit } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';

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

  arrayOfModulos: string[] = []
  sizeOfArrayOfModulos: number = 0;
  indexOfModulos: number = 0;

  tituloModulo: string = '';
  tipoModulo: string = '';
  colorModulo: string = '';
  estiloMayorRetencion: string = '';
  dataParaModulos: any[] = [];
  progresoArr: number[] = [];

  constructor(private componentesService: ComponentesService, private modulosService: ModulosService) { }


   llenarInfo(): void{
    this.tituloModulo = this.modulosStr['nombre'];
    this.tipoModulo = this.modulosStr['tipo'];
    this.colorModulo = this.modulosStr['color'];
  }


  ngOnInit(): void {
    this.componentesService.getEstiloMayorRetencion().subscribe(
     estiloMayorRetencion => this.estiloMayorRetencion = estiloMayorRetencion
    ); 
    this.modulosService.getModulosAprendizaje().subscribe(
     arrayOfModulos => this.arrayOfModulos = arrayOfModulos
    ); 
    this.modulosService.getDataParaModulos().subscribe(
     dataParaModulos => this.dataParaModulos = dataParaModulos
    ); 

    this.modulosService.setProgresoAvance(this.indexOfModulos);
    this.sizeOfArrayOfModulos = this.arrayOfModulos.length;

    for (var i = 0; i <= this.sizeOfArrayOfModulos; i++) {
      let percentageOfIndex = ((i/this.sizeOfArrayOfModulos) * 100);
      this.progresoArr.push(Math.trunc(percentageOfIndex))
    }
    
    this.modulosService.setProgresoArray(this.progresoArr);

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

    //mejorar ???
  avanzarModulo(): void{
    if(this.indexOfModulos+1 <= this.sizeOfArrayOfModulos){
      this.modulosService.setProgresoAvance(this.indexOfModulos+1);
    }
    if(this.indexOfModulos+1 < this.sizeOfArrayOfModulos){
      this.indexOfModulos = this.indexOfModulos+1;
      this.modulosStr = this.modulosObj[this.arrayOfModulos[this.indexOfModulos]]
      this.llenarInfo();
    }
  }



}
