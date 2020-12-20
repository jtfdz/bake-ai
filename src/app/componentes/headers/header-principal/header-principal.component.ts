import { Component, OnInit, Input  } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import segmentos from 'src/assets/json/segmentosHeader.json';
import urls from 'src/assets/json/urls.json';
declare const openModal: any;
declare const openTab: any;

interface IndexObj {
  [index: string]: {};
}

interface IndexStr {
  [index: string]: string;
}

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {

  nombreUsuario: String = '';
  imagenes: String = urls.general;
  @Input() esInicio: boolean = false;
  @Input() mensajePersonalizado: string = '';
  teoriaObj: IndexObj = segmentos;
  teoriaStr: IndexStr = {};


  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getNombreUsuario().subscribe(
     nombreUsuario => this.nombreUsuario = nombreUsuario
    ); 
  }

  public activar(nombreSegmento: string): void { 
    this.teoriaStr = this.teoriaObj[nombreSegmento];  
    this.componentesService.setTituloCard(this.teoriaStr['titulo'])
    this.componentesService.setColorCard(this.teoriaStr['color'])
    openModal(1, '#myModal'); 
  }



}
