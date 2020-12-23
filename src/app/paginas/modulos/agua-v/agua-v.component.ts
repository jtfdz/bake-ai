import { Component, OnInit, Input } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
import { isHiragana } from 'wanakana';
declare const getEbCN: any;
declare const modalFunction: any;

@Component({
  selector: 'app-agua-v',
  templateUrl: './agua-v.component.html',
  styleUrls: ['./agua-v.component.css']
})
export class AguaVComponent implements OnInit {

  //mejorar: podria no enviar el tercer parametro porque no lo ne3ces3ito XDDDDDD
  @Input() dataAgua: any[] = [];
  elementosTabla: string[] = [];
  respuesta: string = '';
  acertado: boolean = false;
  dioRespuesta: boolean = false;

  constructor(private temasService: TemasService) { }

  ngOnInit(): void {
  	this.elementosTabla = this.temasService.getRandomSingleKanas(this.dataAgua[1], isHiragana(this.dataAgua[1]));
  
  }

  avanzarModulo(): void{
    modalFunction(2, '#aguaResponde');
    this.respuesta = '';
    this.dioRespuesta = false;
    this.acertado = false;
  }


  aguaRespuesta(): void{ 
    console.log(this.respuesta)
    this.dioRespuesta = true;
    if(this.respuesta == this.dataAgua[1]){
      this.acertado = true;
      //this.respuestaSol.emit(true);
    }else{
      //this.respuestaSol.emit(false);
    }
    modalFunction(1, '#aguaResponde');
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
