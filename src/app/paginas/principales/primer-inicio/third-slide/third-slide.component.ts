import { Component } from '@angular/core';
declare const openTab: any;
import urls from 'src/app/urls.json';
import { PrimerInicioService } from '../primer-inicio.service';
declare const openModal: any;
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';



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

  public activar(): void { openModal(1); }


  public proceder(): void{
    this.isInputThirdSlideDisabled = true;
    this.primerInicioService.setShow4(); 
    openModal(2);
  }


  public volver(): void{
    openModal(2);
  }




}
