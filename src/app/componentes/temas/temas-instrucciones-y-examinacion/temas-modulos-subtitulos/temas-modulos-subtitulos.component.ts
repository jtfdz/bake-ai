import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temas-modulos-subtitulos',
  templateUrl: './temas-modulos-subtitulos.component.html',
})
export class TemasModulosSubtitulosComponent implements OnInit {


  @Input() colorFondo: string = '';
  @Input() textoSubtitulo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
