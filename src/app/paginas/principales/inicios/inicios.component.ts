import { Component, OnInit } from '@angular/core';
declare const getFromStore: any;

@Component({
  selector: 'app-inicios',
  templateUrl: './inicios.component.html',
  styleUrls: ['./inicios.component.css']
})
export class IniciosComponent implements OnInit {
  
  usuarioIniciado: boolean = getFromStore('usuario.iniciado');

  constructor() { }
  ngOnInit(): void {}

}
