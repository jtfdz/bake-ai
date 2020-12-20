import { Component } from '@angular/core';
import { PrimerInicioService } from 'src/app/servicios/principales/primer-inicio.service';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

declare const openModal: any;


@Component({
  selector: 'app-third-slide',
  templateUrl: './third-slide.component.html',
  styleUrls: ['./third-slide.component.css']
})
export class ThirdSlideComponent {

  nombreUsuario: string = '';
  isInputThirdSlideDisabled: boolean = false;

  constructor(private primerInicioService: PrimerInicioService, private componentesService: ComponentesService) { }

  public activar(): void { openModal(1, "#myModal"); }


  public volver(): void{
    openModal(2, "#myModal");
  }

  
  public proceder(): void{
    this.isInputThirdSlideDisabled = true;
    this.primerInicioService.setShow4(); 
    this.volver();
    this.componentesService.setNombreUsuario(this.nombreUsuario)
  }



}
