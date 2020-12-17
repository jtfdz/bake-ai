import { Component, OnInit, Input } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
declare const openModal: any;

@Component({
  selector: 'app-temas-instrucciones-y-examinacion',
  templateUrl: './temas-instrucciones-y-examinacion.component.html',
  styleUrls: ['./temas-instrucciones-y-examinacion.component.css']
})
export class TemasInstruccionesYExaminacionComponent implements OnInit {

  @Input() tipoEscritura: string = '';
  kanasAPruebaObj: {} = {};
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



  abrirModalExaminacion(){
   this.kanasAPruebaObj = this.temasService.getTablaExaminacion('hiragana');
   this.sizeOfkanasAPruebaObj = Object.keys(this.kanasAPruebaObj).length;
   for (let i =0; i < this.sizeOfkanasAPruebaObj; i++) {
      this.tagColorRandom.push(this.tagColorArray[Math.floor(Math.random() * this.tagColorArray.length)]);
   }
	 openModal(1, '#modalInstExam');
  }

  cerrar(){
    openModal(2, '#modalInstExam');
  }

  constructor(private temasService: TemasService) { }

  ngOnInit(): void {
  }

}
