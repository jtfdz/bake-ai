import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { TemasService } from 'src/app/servicios/temas/temas.service';
import { ComponentesService } from 'src/app/servicios/componentes/componentes.service';
import { ModulosService } from 'src/app/servicios/modulos/modulos.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-modulos-finalizacion',
  templateUrl: './modulos-finalizacion.component.html',
  styleUrls: ['./modulos-finalizacion.component.css']
})
export class ModulosFinalizacionComponent implements OnInit {

	nombreUsuario: string = '';
	loading: boolean = true;
	kanasDesbloqueadas: string[] = [];
	kanasBloqueados: string[] = [];
	valorAciertos: number = 0;
	valorFallos: number = 0;
	valorPorcentaje: number = 0;

	constructor(private modulosService: ModulosService, private temasService: TemasService, private spinnerModulos: NgxSpinnerService, public location: Location, private componentesService: ComponentesService) { }

	ngOnInit(): void {
		this.modulosService.getResultadosCargando().subscribe(
			resultadosCargando => {
				this.loading = resultadosCargando
			}
		); 

		this.componentesService.getNombreUsuario().subscribe(
		 nombreUsuario => this.nombreUsuario = nombreUsuario
		); 
		this.spinnerModulos.show()
		this.temasService.getKanaEstudiando().subscribe(
		 kanaEstudiando => this.kanasDesbloqueadas = kanaEstudiando
		); 
		this.temasService.getKanaBloqueado().subscribe(
		 kanaBloqueado => this.kanasBloqueados = kanaBloqueado
		); 

		this.modulosService.getAciertosValor().subscribe(
			aciertosSuma => this.valorAciertos = aciertosSuma
		); 
		this.modulosService.getFallosValor().subscribe(
			fallosSuma => this.valorFallos = fallosSuma
		); 
	}

	porcentajeDeAciertos(): number{
		var cienPorCiento = this.valorAciertos+this.valorFallos;
		this.valorPorcentaje = (this.valorAciertos/cienPorCiento)*100;
		return this.valorPorcentaje;
	}



}
