import { Component } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

@Component({
  selector: 'app-forth-slide',
  templateUrl: './forth-slide.component.html',
  styleUrls: ['./forth-slide.component.css']
})
export class ForthSlideComponent {

  constructor(private componentesService: ComponentesService) { }

  public finalizar(): void{
  	this.componentesService.setUsuarioIniciado(true)
  }

}
