import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-temas-titulos',
  templateUrl: './temas-titulos.component.html',
  styleUrls: ['./temas-titulos.component.css']
})
export class TemasTitulosComponent implements OnInit {

  @Input() tituloTema: string = '';
  @Input() tituloNativoTema: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
