import { Component, OnInit } from '@angular/core';
declare const getFromStore: any;
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-header-principal',
  templateUrl: './header-principal.component.html',
  styleUrls: ['./header-principal.component.css']
})
export class HeaderPrincipalComponent implements OnInit {

  nombreUsuario: String = getFromStore('usuario.nombre');
  imagenes: String = urls.general;

  constructor() { }

  ngOnInit(): void {
  }

}
