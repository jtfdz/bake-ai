import { Component } from '@angular/core';
import urls from 'src/assets/json/urls.json';
declare const setInStore: any;
declare const getFromStore: any;


@Component({
  selector: 'app-forth-slide',
  templateUrl: './forth-slide.component.html',
  styleUrls: ['./forth-slide.component.css']
})
export class ForthSlideComponent {

  imagenes: String = urls.forthslide;

  constructor() { }

  public finalizar(): void{
    setInStore('usuario.iniciado', true);
  }

}
