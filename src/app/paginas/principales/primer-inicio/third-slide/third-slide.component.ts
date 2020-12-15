import { Component } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { PrimerInicioService } from 'src/app/servicios/principales/primer-inicio.service';
import urls from 'src/assets/json/urls.json';

declare const openModal: any;
declare const setInStore: any;

@Component({
  selector: 'app-third-slide',
  templateUrl: './third-slide.component.html',
  styleUrls: ['./third-slide.component.css']
})
export class ThirdSlideComponent {

  imagenes: String = urls.thirdslide;
  nombrecito: String = '';
  isInputThirdSlideDisabled: boolean = false;

  constructor(private scrollToService: ScrollToService, private primerInicioService: PrimerInicioService) { }

  public activar(): void { openModal(1, "#myModal"); }


  public volver(): void{
    openModal(2, "#myModal");
  }

  
  public proceder(): void{
    this.isInputThirdSlideDisabled = true;
    this.primerInicioService.setShow4(); 
    this.volver();
    setInStore('usuario.nombre',this.nombrecito);
  }



}
