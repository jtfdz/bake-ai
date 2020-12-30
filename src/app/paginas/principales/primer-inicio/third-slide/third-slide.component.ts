import { Component } from '@angular/core';
import { PrimerInicioService } from 'src/app/servicios/principales/primer-inicio.service';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

declare const modalFunction: any;


@Component({
  selector: 'app-third-slide',
  templateUrl: './third-slide.component.html',
  styleUrls: ['./third-slide.component.css']
})
export class ThirdSlideComponent {

  nombreUsuario: string = '';
  isInputThirdSlideDisabled: boolean = false;

  constructor(private primerInicioService: PrimerInicioService, private componentesService: ComponentesService) { }

  activar(): void { modalFunction(1, "#myModal"); }

  volver(): void{  modalFunction(2, "#myModal");  }

  
  proceder(): void{
    this.isInputThirdSlideDisabled = true;
    this.primerInicioService.setShow4(); 
    this.volver();
    this.componentesService.setNombreUsuario(this.nombreUsuario)
  }


  nombreRecibido(respuesta: any): void {
    this.nombreUsuario = respuesta;
  }


}
