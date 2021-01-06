import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-botones-iconos-temas',
  templateUrl: './botones-iconos-temas.component.html',
})
export class BotonesIconosTemasComponent implements OnInit {

  @Input() colorBoton: string = '';
  @Input() imagenBoton: string = '';
  @Input() tituloBoton: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

