import { Component, OnInit, Input } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';
declare const modalFunction: any;
declare const getEbCN: any;

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
  navTabsInstrucciones: string[] = ['tablas', 'examinación'];
  tabActivada: string = 'tablas';

  //, 'fuego', 'agua', 'árbol', 'oro', 'tierra', 'sol', 'luna'

  constructor(private temasService: TemasService, private modulosService: ModulosService) { }

  ngOnInit(): void {}


  kanaSetObjs(objItself:{}, isIniciado: boolean, arrayOfTagColor: string[]): number{
    Object.assign(objItself, this.temasService.getTablaExaminacion(this.tipoEscritura, isIniciado));
    let sizeOfObj = Object.keys(objItself).length;
    for (let i =0; i < sizeOfObj; i++) {
      arrayOfTagColor.push(this.tagColorArray[Math.floor(Math.random() * this.tagColorArray.length)]);
    }
    return sizeOfObj;
  }

  examinacionSeguir(){
   this.modulosService.setDataParaModulos(this.tipoEscritura);
  }

  abrirModalExaminacion(){
   this.sizeOfkanasAPruebaObj = this.kanaSetObjs(this.kanasAPruebaObj, false, this.tagColorRandom);
   this.sizeOfkanasIniciadosObj = this.kanaSetObjs(this.kanasIniciadosObj, true, this.tagColorRandomIniciados);
   this.abrirModales('#modalInstExam')
  }

  cerrar(idModal: string): void{
    modalFunction(2, idModal);
  }

  abrirModales(idModal: string): void{
    modalFunction(1, idModal);
  }

  openTabInstruccion(evt: any, item: string): void{
    let tablinks = getEbCN("tab");
    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" has-background-danger-light", " has-background-white");
    }
    evt.currentTarget.className = evt.currentTarget.className.replace(" has-background-white", " has-background-danger-light")
    this.tabActivada = item;
  }


}