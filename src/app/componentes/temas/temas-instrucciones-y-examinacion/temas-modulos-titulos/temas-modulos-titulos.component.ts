import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temas-modulos-titulos',
  templateUrl: './temas-modulos-titulos.component.html',
})
export class TemasModulosTitulosComponent implements OnInit {

  @Input() temaTitulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
