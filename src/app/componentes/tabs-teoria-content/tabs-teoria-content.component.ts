import { Component, OnInit, Input } from '@angular/core';
import { TeoriaService } from 'src/app/servicios/temas/teoria.service';
declare const getEbCN: any;
declare const getEbQSA: any;
declare const getEbI: any;

@Component({
  selector: 'app-tabs-teoria-content',
  templateUrl: './tabs-teoria-content.component.html',
  styleUrls: ['./tabs-teoria-content.component.css']
})
export class TabsTeoriaContentComponent implements OnInit {

  @Input() Contenido: string[] = [];
  @Input() seccionContenido: String = '';
  @Input() colorContenido: String = '';

  constructor(private teoriaService: TeoriaService) { }

  ngOnInit(): void {
  }
  

	openContent(seccionContenido: string, indexNumber: number, tituloContenido: string, colorSeccion: string){
     let tablinks: HTMLElement[] = getEbQSA('.panel-block');
     for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active has-background-light", "");
     }
     getEbI(seccionContenido+'-'+indexNumber).className += " is-active has-background-light";
	   this.teoriaService.setTeoria(seccionContenido, tituloContenido);
     getEbI('cardHeader').className = "card-header has-background-"+colorSeccion;
  }


}
