import { Component, OnInit, Input  } from '@angular/core';
import segmentos from 'src/assets/json/segmentosHeader.json';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
declare const openModal: any;


@Component({
  selector: 'app-botones-iconos-modal',
  templateUrl: './botones-iconos-modal.component.html',
  styleUrls: ['./botones-iconos-modal.component.css']
})
export class BotonesIconosModalComponent implements OnInit {

  tituloCard: String = 'bake ai: la aplicación';
  colorCard: String = 'success';

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {

    this.componentesService.getTituloCard().subscribe(
     tituloCard => this.tituloCard = tituloCard
    );
    this.componentesService.getColorCard().subscribe(
     colorCard => this.colorCard = colorCard
    ); 
  }

  public desactivar(): void { openModal(2); }


}


