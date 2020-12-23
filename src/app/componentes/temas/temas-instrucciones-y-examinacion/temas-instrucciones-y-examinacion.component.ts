import { Component, OnInit, Input } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
declare const modalFunction: any;
declare const openTabInstruccion: any;
declare const desbloqueaNuevo: any;
declare const modeloDeAprendizaje: any;

@Component({
  selector: 'app-temas-instrucciones-y-examinacion',
  templateUrl: './temas-instrucciones-y-examinacion.component.html',
  styleUrls: ['./temas-instrucciones-y-examinacion.component.css']
})
export class TemasInstruccionesYExaminacionComponent implements OnInit {

  @Input() tipoEscritura: string = '';
  kanasAPruebaObj: {} = {};
  kanasIniciadosObj: {} = {};
  tagColorArray: string[] = [
    'is-primary',
    'is-link',
    'is-info',
    'is-warning',
    'is-danger',
    'is-success'
  ];
  tagColorRandom: string[] = [];
  sizeOfkanasAPruebaObj: number = 0;
  tagColorRandomIniciados: string[] = [];
  sizeOfkanasIniciadosObj: number = 0;
  navTabsInstrucciones: string[] = ['tablas', 'examinación', 'fuego', 'agua', 'árbol', 'oro', 'tierra', 'sol', 'luna'];


  constructor(private temasService: TemasService) { }

  ngOnInit(): void {}


  kanaSetObjs(objItself:{}, isIniciado: boolean, arrayOfTagColor: string[]): number{
    Object.assign(objItself, this.temasService.getTablaExaminacion(this.tipoEscritura, isIniciado));
    let sizeOfObj = Object.keys(objItself).length;
    for (let i =0; i < sizeOfObj; i++) {
      arrayOfTagColor.push(this.tagColorArray[Math.floor(Math.random() * this.tagColorArray.length)]);
    }
    return sizeOfObj;
  }


  abrirModalExaminacion(){
   desbloqueaNuevo(this.tipoEscritura)
   this.sizeOfkanasAPruebaObj = this.kanaSetObjs(this.kanasAPruebaObj, false, this.tagColorRandom);
   this.sizeOfkanasIniciadosObj = this.kanaSetObjs(this.kanasIniciadosObj, true, this.tagColorRandomIniciados);
   this.abrirModales('#modalInstExam')
   modeloDeAprendizaje();
  }

  cerrar(idModal: string): void{
    modalFunction(2, idModal);
  }

  abrirModales(idModal: string): void{
   modalFunction(1, idModal);
  }

}