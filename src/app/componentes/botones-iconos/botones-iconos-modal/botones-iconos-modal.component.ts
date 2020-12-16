import { Component, OnInit, Input } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import urls from 'src/assets/json/urls.json';
import segmentos from 'src/assets/json/segmentosHeader.json';
declare const openModal: any;
declare const getFromStore: any;
declare const setInStore: any;

@Component({
  selector: 'app-botones-iconos-modal',
  templateUrl: './botones-iconos-modal.component.html',
  styleUrls: ['./botones-iconos-modal.component.css']
})
export class BotonesIconosModalComponent implements OnInit {

  tituloCard: String = 'bake ai: la aplicación';
  colorCard: String = 'success';
  imagenes: String = urls.general;
  imagenesModal: String = urls.modals;
  nombreUsuario: String = getFromStore('usuario.nombre');

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getTituloCard().subscribe(
     tituloCard => this.tituloCard = tituloCard
    );
    this.componentesService.getColorCard().subscribe(
     colorCard => this.colorCard = colorCard
    ); 
  }

  public desactivar(): void { openModal(2, '#myModal'); }

  public guardar(): void {
    setInStore('usuario.nombre', this.nombreUsuario);
    openModal(2, '#myModal');
  }

}
