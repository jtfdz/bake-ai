import { Component, OnInit, Input } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import urls from 'src/assets/json/urls.json';
declare const modalFunction: any;

interface IndexObj {
  [index: string]: {};
}

interface IndexStr {
  [index: string]: string;
}

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
})
export class HeaderPrincipalComponent implements OnInit {

  nombreUsuario: string = '';
  imagenes: string = urls.general;


  @Input() esInicio: boolean = false;
  @Input() mensajePersonalizado: string = '';
  teoriaObj: IndexObj = {};
  teoriaStr: IndexStr = {};



  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getNombreUsuario().subscribe(
     nombreUsuario => this.nombreUsuario = nombreUsuario
    ); 
  }


  public activar(nombreSegmento: string): void { 

    this.teoriaObj = {
    "app": {
      "titulo": "bake ai: la aplicación",  
      "color": "success"
    },
    "config": {
      "titulo": "personaliza tu aplicación: configuración", 
      "color": "warning"
    },
    "stats": {
      "titulo": "conoce tu rendimiento: estadísticas", 
      "color": "primary"    
    }
  };

    this.teoriaStr = this.teoriaObj[nombreSegmento];  
    this.componentesService.setTituloCard(this.teoriaStr['titulo'])
    this.componentesService.setColorCard(this.teoriaStr['color'])
    modalFunction(1, '#myModal'); 
  }




}
