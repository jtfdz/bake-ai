import { Component, OnInit, Input } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
declare const openModal: any;
declare const openTabInstruccion: any;
declare const desbloqueaNuevo: any;

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


  //mejorar XD
  abrirModalExaminacion(){
   desbloqueaNuevo(this.tipoEscritura)
   this.kanasAPruebaObj = this.temasService.getTablaExaminacion(this.tipoEscritura, false);
   this.kanasIniciadosObj = this.temasService.getTablaExaminacion(this.tipoEscritura, true);
   this.sizeOfkanasAPruebaObj = Object.keys(this.kanasAPruebaObj).length;
   this.sizeOfkanasIniciadosObj = Object.keys(this.kanasIniciadosObj).length;
   for (let i =0; i < this.sizeOfkanasAPruebaObj; i++) {
      this.tagColorRandom.push(this.tagColorArray[Math.floor(Math.random() * this.tagColorArray.length)]);
   }
   for (let i =0; i < this.sizeOfkanasIniciadosObj; i++) {
      this.tagColorRandomIniciados.push(this.tagColorArray[Math.floor(Math.random() * this.tagColorArray.length)]);
   }
   this.abrirModales('#modalInstExam')

  }






  cerrar(idModal: string){
    openModal(2, idModal);
  }

  abrirModales(idModal: string){
   openModal(1, idModal);
  }




  constructor(private temasService: TemasService) { }

  ngOnInit(): void {
    
  }

}
