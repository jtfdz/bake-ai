import { Component, OnInit, Input } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-botones-iconos-temas',
  templateUrl: './botones-iconos-temas.component.html',
  styleUrls: ['./botones-iconos-temas.component.css']
})
export class BotonesIconosTemasComponent implements OnInit {


  imagenes: String = urls.iniciogeneral;
  @Input() colorBoton: string = '';
  @Input() imagenBoton: string = '';
  @Input() tituloBoton: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}

