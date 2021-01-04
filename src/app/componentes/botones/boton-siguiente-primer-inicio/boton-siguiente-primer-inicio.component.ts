import { Component, OnInit, Input } from '@angular/core';
import { PrimerInicioService } from 'src/app/servicios/principales/primer-inicio.service';

@Component({
  selector: 'app-boton-siguiente-primer-inicio',
  templateUrl: './boton-siguiente-primer-inicio.component.html',
})
export class BotonSiguientePrimerInicioComponent implements OnInit {

  @Input() colorBoton: string = '';
  @Input() siguienteSection: string = '';

  constructor(private primerInicioService: PrimerInicioService) { }

  ngOnInit(): void {
  }

  public activar() { 

	switch(this.siguienteSection) { 
	   case '2': { 
	      this.primerInicioService.setShow2();
	      break; 
	   }
	   case '3': { 
	      this.primerInicioService.setShow3(); 
	      break; 
	   } 
	   case '4': { 
	      this.primerInicioService.setShow4(); 
	      break; 
	   } 

	} 

 	}

}
