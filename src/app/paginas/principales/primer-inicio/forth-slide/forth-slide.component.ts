import { Component } from '@angular/core';
declare const setInStore: any;
declare const getFromStore: any;


@Component({
  selector: 'app-forth-slide',
  templateUrl: './forth-slide.component.html',
  styleUrls: ['./forth-slide.component.css']
})
export class ForthSlideComponent {

  constructor() { }

  public finalizar(): void{
    setInStore('usuario.iniciado', true);
  }

}
