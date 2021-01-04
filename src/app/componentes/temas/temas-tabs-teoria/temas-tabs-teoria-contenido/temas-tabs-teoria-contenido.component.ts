import { Component, OnInit, Input } from '@angular/core';
import { TemasService } from 'src/app/servicios/temas/temas.service';
declare const getEbCN: any;
declare const getEbQSA: any;
declare const getEbI: any;

@Component({
  selector: 'app-temas-tabs-teoria-contenido',
  templateUrl: './temas-tabs-teoria-contenido.component.html',
  styleUrls: ['./temas-tabs-teoria-contenido.component.css']
})
export class TemasTabsTeoriaContenidoComponent implements OnInit {

  @Input() Contenido: string[] = [];
  @Input() seccionContenido: String = '';
  @Input() colorContenido: String = '';

  constructor(private temasService: TemasService) { }

  ngOnInit(): void {
  }
  

  openContent(seccionContenido: string, indexNumber: number, tituloContenido: string, colorSeccion: string){
     let tablinks: HTMLElement[] = getEbQSA('.panel-block');
     for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active has-background-light", "");
     }
     getEbI(seccionContenido+'-'+indexNumber).className += " is-active has-background-light";
	   this.temasService.setTeoria(seccionContenido, tituloContenido);
     getEbI('cardHeader').className = "card-header has-background-"+colorSeccion;
  }

}
