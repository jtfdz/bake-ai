import { Component, OnInit, Input } from '@angular/core';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';


@Component({
  selector: 'app-aviso-audio-cargando',
  templateUrl: './aviso-audio-cargando.component.html',
  styleUrls: ['./aviso-audio-cargando.component.css']
})
export class AvisoAudioCargandoComponent implements OnInit {

	@Input() audioCargando: boolean = false;

	constructor(private componentesService: ComponentesService) { }



	ngOnInit(): void {
		
	}


  }
