import { Component, OnInit, Input } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import urls from 'src/assets/json/urls.json';
import segmentos from 'src/assets/json/segmentosHeader.json';
declare const openModal: any;

@Component({
  selector: 'app-botones-iconos-modal',
  templateUrl: './botones-iconos-modal.component.html',
  styleUrls: ['./botones-iconos-modal.component.css']
})
export class BotonesIconosModalComponent implements OnInit {

  tituloCard: string = 'bake ai: la aplicación';
  colorCard: string = 'success';
  imagenes: string = urls.general;
  imagenesModal: string = urls.modals;
  nombreUsuario: string = '';

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getTituloCard().subscribe(
     tituloCard => this.tituloCard = tituloCard
    );
    this.componentesService.getColorCard().subscribe(
     colorCard => this.colorCard = colorCard
    ); 
    this.componentesService.getNombreUsuario().subscribe(
     nombreUsuario => this.nombreUsuario = nombreUsuario
    ); 
  }

  public desactivar(): void { openModal(2, '#myModal'); }

  public guardar(): void {
    this.componentesService.setNombreUsuario(this.nombreUsuario)
  }

}
