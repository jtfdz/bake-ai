import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';

@Component({
  selector: 'app-modulos-finalizacion',
  templateUrl: './modulos-finalizacion.component.html',
  styleUrls: ['./modulos-finalizacion.component.css']
})
export class ModulosFinalizacionComponent implements OnInit {

	nombreUsuario: string = '';

	constructor(public location: Location, private componentesService: ComponentesService) { }

	ngOnInit(): void {
	this.componentesService.getNombreUsuario().subscribe(
	 nombreUsuario => this.nombreUsuario = nombreUsuario
	); 
	}


}
