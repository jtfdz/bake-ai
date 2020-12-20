import { Component, OnInit } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

@Component({
  selector: 'app-inicios',
  templateUrl: './inicios.component.html',
  styleUrls: ['./inicios.component.css']
})
export class IniciosComponent implements OnInit {
  
  usuarioIniciado: boolean = false;

  constructor(private componentesService: ComponentesService) { }

  ngOnInit(): void {
    this.componentesService.getUsuarioIniciado().subscribe(
     usuarioIniciado => this.usuarioIniciado = usuarioIniciado
    );  	
  }

}
