import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-temas-instrucciones-y-examinacion',
  templateUrl: './temas-instrucciones-y-examinacion.component.html',
  styleUrls: ['./temas-instrucciones-y-examinacion.component.css']
})
export class TemasInstruccionesYExaminacionComponent implements OnInit {

  imagenes: String = urls.iniciogeneral;

  constructor() { }

  ngOnInit(): void {
  }

}
