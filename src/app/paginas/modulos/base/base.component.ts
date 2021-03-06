import { Component, OnInit } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';
declare const getEbI: any;

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
  aciertos: number[] = [];

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
    this.modulosService.getDataParaModulos().subscribe(
     dataParaModulos => this.dataParaModulos = dataParaModulos
    ); 
    this.modulosService.getModulosAprendizaje().subscribe(
     arrayOfModulos => this.arrayOfModulos = arrayOfModulos
    ); 

   
    this.modulosService.setProgresoAvance(this.indexOfModulos);
    this.sizeOfArrayOfModulos = this.arrayOfModulos.length;

    for (var i = 0; i < this.sizeOfArrayOfModulos; i++) {
      let percentageOfIndex = ((i/(this.sizeOfArrayOfModulos-1)) * 100);
      this.progresoArr.push(Math.trunc(percentageOfIndex));
    }

    this.modulosService.setProgresoArray(this.progresoArr);

    this.aciertos = Array(this.sizeOfArrayOfModulos-1).fill(true);

    this.modulosObj = {
    "teoria": {
      "nombre": "teoría", 
      "tipo": "por ahora, destacas con aprendizaje "+this.estiloMayorRetencion+".",
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
      "tipo": "auditiva y visual",
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
    },
    "modulosfinalizados": {
      "nombre": "resultado", 
      "tipo": "calculando...",
      "color": "success"
    }
  };

  	this.modulosStr = this.modulosObj[this.arrayOfModulos[0]];
  	this.llenarInfo();

  }

    //mejorar ???
  avanzarModulo(): void {
    if(this.indexOfModulos+1 <= this.sizeOfArrayOfModulos){
      this.modulosService.setProgresoAvance(this.indexOfModulos+1);
    }
    if(this.indexOfModulos+1 < this.sizeOfArrayOfModulos){
      this.indexOfModulos = this.indexOfModulos+1;
      this.modulosStr = this.modulosObj[this.arrayOfModulos[this.indexOfModulos]]
      this.llenarInfo();
    }
    if(this.indexOfModulos == this.sizeOfArrayOfModulos-1){
      this.modulosService.calcularEstiloDeAprendizaje();
    }
  }



  public integrarRespuesta(respuesta: boolean): void {
    let color = respuesta?' has-background-success':' has-background-primary';
    getEbI('aciertos-fallos-'+this.indexOfModulos).className = getEbI('aciertos-fallos-'+this.indexOfModulos).className.replace(" has-background-warning", color);
    getEbI('aciertos-fallos-span-'+this.indexOfModulos).innerText = respuesta? '✅': '❌';
  }





}
