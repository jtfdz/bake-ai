import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
import { isHiragana } from 'wanakana';
declare const getEbCN: any;

@Component({
  selector: 'app-agua-v',
  templateUrl: './agua-v.component.html',
  styleUrls: ['./agua-v.component.css']
})
export class AguaVComponent {

  //mejorar: podria no enviar el tercer parametro porque no lo ne3ces3ito XDDDDDD
  @Input() dataAgua: any[] = [];
  @Output() respuestaAgua: EventEmitter<any> = new EventEmitter<any>();
  @Output() sigueAgua: EventEmitter<any> = new EventEmitter<any>();

  elementosTabla: string[] = [];
  respuesta: string = '';
  acertado: boolean = false;
  dioRespuesta: boolean = false;

  constructor(private temasService: TemasService) { }

  ngOnChanges(): void{
    this.elementosTabla = this.temasService.getRandomSingleKanas(this.dataAgua[1], isHiragana(this.dataAgua[1]));
  }

  avanzarModulo(): void{
    this.sigueAgua.emit(true);
    this.respuesta = '';
    this.dioRespuesta = false;
    this.acertado = false;
    let aguaColumna = getEbCN('column-button');
    for (var i = 0; i < aguaColumna.length; i++) {
      aguaColumna[i].className = aguaColumna[i].className.replace(" is-dark", " is-white");
    }
  }


  aguaRespuesta(): void{
    this.dioRespuesta = true;
    if(this.respuesta == this.dataAgua[1]){
      this.acertado = true;
      this.respuestaAgua.emit(true);
    }else{
      this.respuestaAgua.emit(false);
    }
  }


  aguaColumna(evento: any): void{
    let aguaColumna = getEbCN('column-button');
    for (var i = 0; i < aguaColumna.length; i++) {
      aguaColumna[i].className = aguaColumna[i].className.replace(" is-dark", " is-white");
    }
    evento.currentTarget.className += ' is-dark';
    this.respuesta = evento.currentTarget.innerText;
  }

}
