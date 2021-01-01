import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botones-iconos',
  templateUrl: './botones-iconos.component.html',
  styleUrls: ['./botones-iconos.component.css']
})
export class BotonesIconosComponent implements OnInit {

  @Input() botonColor: string = '';
  @Input() imgSource: string = '';
  @Input() tooltipTexto: string = '';
  @Input() clasePaso: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
