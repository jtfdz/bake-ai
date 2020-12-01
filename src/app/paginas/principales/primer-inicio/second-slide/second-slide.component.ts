import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';
import { PrimerInicioService } from 'src/app/servicios/principales/primer-inicio.service';
declare const setInStore: any;

@Component({
  selector: 'app-second-slide',
  templateUrl: './second-slide.component.html',
  styleUrls: ['./second-slide.component.css']
})
export class SecondSlideComponent implements OnInit {

  imagenes: String = urls.secondslide;

  constructor(private primerInicioService: PrimerInicioService) { }

  ngOnInit(): void {}

  public activar() {
    this.primerInicioService.setShow3();
    setInStore('usuario.gusto','animales')
   }

}
