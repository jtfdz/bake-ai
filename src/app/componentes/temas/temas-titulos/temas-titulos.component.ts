import { Component, OnInit, Input } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-temas-titulos',
  templateUrl: './temas-titulos.component.html',
  styleUrls: ['./temas-titulos.component.css']
})
export class TemasTitulosComponent implements OnInit {

  @Input() tituloTema: string = '';
  @Input() tituloNativoTema: string = '';
  imagenes: String = urls.iniciogeneral;

  constructor() { }

  ngOnInit(): void {
  }

}
