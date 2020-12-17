import { Component, OnInit } from '@angular/core';
declare const getFromStore: any;


@Component({
  selector: 'app-header-modulos',
  templateUrl: './header-modulos.component.html',
  styleUrls: ['./header-modulos.component.css']
})
export class HeaderModulosComponent implements OnInit {


  nombreUsuario: String = getFromStore('usuario.nombre');

  constructor() { }

  ngOnInit(): void {
  }


  public activar(): void { 
  }


}
