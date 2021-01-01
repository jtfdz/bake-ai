import { Component, OnInit } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-modal-contenido-aplicacion',
  templateUrl: './modal-contenido-aplicacion.component.html',
  styleUrls: ['./modal-contenido-aplicacion.component.css']
})
export class ModalContenidoAplicacionComponent implements OnInit {


  imagenes: string = urls.general;
  
  constructor() { }

  ngOnInit(): void {
  }

}
