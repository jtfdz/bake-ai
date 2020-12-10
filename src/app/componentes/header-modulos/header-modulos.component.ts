import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';
declare const getFromStore: any;


@Component({
  selector: 'app-header-modulos',
  templateUrl: './header-modulos.component.html',
  styleUrls: ['./header-modulos.component.css']
})
export class HeaderModulosComponent implements OnInit {


  nombreUsuario: String = getFromStore('usuario.nombre');
  imagenes: String = urls.general;
  imagenes2: String = urls.iniciogeneral;

  constructor() { }

  ngOnInit(): void {
  }


  public activar(): void { 
  }


}
