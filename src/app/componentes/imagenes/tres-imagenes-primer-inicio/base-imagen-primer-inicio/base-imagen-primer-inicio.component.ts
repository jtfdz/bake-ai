import { Component, Input } from '@angular/core';
import urls from 'src/assets/json/urls.json';

@Component({
  selector: 'app-base-imagen-primer-inicio',
  templateUrl: './base-imagen-primer-inicio.component.html',
  styleUrls: ['./base-imagen-primer-inicio.component.css']
})
export class BaseImagenPrimerInicioComponent {

  imagenes: String = urls.slides;
  @Input() nombreImagen: string = '';

  constructor() { }

}
