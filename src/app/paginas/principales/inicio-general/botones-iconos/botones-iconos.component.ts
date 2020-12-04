import { Component, OnInit, Input } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-botones-iconos',
  templateUrl: './botones-iconos.component.html',
  styleUrls: ['./botones-iconos.component.css']
})
export class BotonesIconosComponent implements OnInit {

  @Input() botonColor: string = '';
  @Input() imgSource: string = '';
  @Input() tooltipTexto: string = '';
  imagenes: String = urls.iniciogeneral;



  constructor() { }

  ngOnInit(): void {
  }

}
