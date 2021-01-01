import { Component, OnInit } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
declare const modalFunction: any;

@Component({
  selector: 'app-modal-contenido-configuracion',
  templateUrl: './modal-contenido-configuracion.component.html',
  styleUrls: ['./modal-contenido-configuracion.component.css']
})
export class ModalContenidoConfiguracionComponent implements OnInit {


  nombreUsuario: string = '';
  aceptado: boolean = false;

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getNombreUsuario().subscribe(
     nombreUsuario => this.nombreUsuario = nombreUsuario
    ); 
  }

  public guardar(): void {
    this.componentesService.setNombreUsuario(this.nombreUsuario)
    this.aceptado = true;
    setTimeout (() => { this.aceptado = false }, 2000)
  }

  nombreRecibido(respuesta: any): void {
    this.nombreUsuario = respuesta;
  }

}
