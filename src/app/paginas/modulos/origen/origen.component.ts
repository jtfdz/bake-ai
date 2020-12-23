import { Component, OnInit, Input  } from '@angular/core';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';
import { TemasService } from 'src/app/servicios/temas/temas.service';

@Component({
  selector: 'app-origen',
  templateUrl: './origen.component.html',
  styleUrls: ['./origen.component.css'],
})
export class OrigenComponent implements OnInit {


	@Input() moduloActivado: string = '';
	@Input() moduloData: any[] = [];

	tipoEscritura: string = 'hiragana';

	constructor(private modulosService: ModulosService) { }

	ngOnInit(): void {
	}

	public integrarRespuesta(respuesta: any):void {
	    //console.log('Picked date: ', date);
	}





}